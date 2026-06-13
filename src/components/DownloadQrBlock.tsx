import { DOWNLOAD_PAGE_URL } from "@/components/storeLinks";

type DownloadQrBlockProps = {
  className?: string;
  url?: string;
};

const QR_VERSION = 3;
const QR_SIZE = 21 + (QR_VERSION - 1) * 4;
const DATA_CODEWORDS = 55;
const ECC_CODEWORDS = 15;
const QUIET_ZONE = 4;

type MatrixCell = boolean | null;
type Matrix = MatrixCell[][];

function appendBits(bits: number[], value: number, length: number) {
  for (let i = length - 1; i >= 0; i--) {
    bits.push((value >>> i) & 1);
  }
}

function encodeUtf8(text: string) {
  return Array.from(new TextEncoder().encode(text));
}

function makeDataCodewords(text: string) {
  const bytes = encodeUtf8(text);
  const bits: number[] = [];
  const capacityBits = DATA_CODEWORDS * 8;

  appendBits(bits, 0x4, 4);
  appendBits(bits, bytes.length, 8);
  bytes.forEach((byte) => appendBits(bits, byte, 8));

  const terminatorLength = Math.min(4, capacityBits - bits.length);
  for (let i = 0; i < terminatorLength; i++) bits.push(0);
  while (bits.length % 8 !== 0) bits.push(0);

  const codewords: number[] = [];
  for (let i = 0; i < bits.length; i += 8) {
    let value = 0;
    for (let j = 0; j < 8; j++) value = (value << 1) | bits[i + j];
    codewords.push(value);
  }

  for (let pad = 0xec; codewords.length < DATA_CODEWORDS; pad ^= 0xfd) {
    codewords.push(pad);
  }

  return codewords;
}

const gfExp = new Array<number>(512);
const gfLog = new Array<number>(256);

let gfValue = 1;
for (let i = 0; i < 255; i++) {
  gfExp[i] = gfValue;
  gfLog[gfValue] = i;
  gfValue <<= 1;
  if (gfValue & 0x100) gfValue ^= 0x11d;
}
for (let i = 255; i < 512; i++) gfExp[i] = gfExp[i - 255];

function gfMultiply(x: number, y: number) {
  if (x === 0 || y === 0) return 0;
  return gfExp[gfLog[x] + gfLog[y]];
}

function polynomialMultiply(left: number[], right: number[]) {
  const result = new Array<number>(left.length + right.length - 1).fill(0);

  left.forEach((leftCoefficient, i) => {
    right.forEach((rightCoefficient, j) => {
      result[i + j] ^= gfMultiply(leftCoefficient, rightCoefficient);
    });
  });

  return result;
}

function reedSolomonGenerator(degree: number) {
  let result = [1];
  for (let i = 0; i < degree; i++) {
    result = polynomialMultiply(result, [1, gfExp[i]]);
  }
  return result;
}

function reedSolomonRemainder(data: number[], degree: number) {
  const generator = reedSolomonGenerator(degree);
  const result = new Array<number>(degree).fill(0);

  data.forEach((byte) => {
    const factor = byte ^ result.shift()!;
    result.push(0);

    for (let i = 0; i < degree; i++) {
      result[i] ^= gfMultiply(generator[i + 1], factor);
    }
  });

  return result;
}

function createEmptyMatrix() {
  const modules: Matrix = [];
  const reserved: boolean[][] = [];

  for (let y = 0; y < QR_SIZE; y++) {
    modules.push(new Array<MatrixCell>(QR_SIZE).fill(null));
    reserved.push(new Array<boolean>(QR_SIZE).fill(false));
  }

  return { modules, reserved };
}

function inBounds(x: number, y: number) {
  return x >= 0 && y >= 0 && x < QR_SIZE && y < QR_SIZE;
}

function setFunctionModule(
  modules: Matrix,
  reserved: boolean[][],
  x: number,
  y: number,
  dark: boolean,
) {
  if (!inBounds(x, y)) return;
  modules[y][x] = dark;
  reserved[y][x] = true;
}

function drawFinderPattern(
  modules: Matrix,
  reserved: boolean[][],
  left: number,
  top: number,
) {
  for (let y = -1; y <= 7; y++) {
    for (let x = -1; x <= 7; x++) {
      const xx = left + x;
      const yy = top + y;
      const dark =
        x >= 0 &&
        x <= 6 &&
        y >= 0 &&
        y <= 6 &&
        (x === 0 ||
          x === 6 ||
          y === 0 ||
          y === 6 ||
          (x >= 2 && x <= 4 && y >= 2 && y <= 4));

      setFunctionModule(modules, reserved, xx, yy, dark);
    }
  }
}

function drawAlignmentPattern(
  modules: Matrix,
  reserved: boolean[][],
  centerX: number,
  centerY: number,
) {
  for (let y = -2; y <= 2; y++) {
    for (let x = -2; x <= 2; x++) {
      const distance = Math.max(Math.abs(x), Math.abs(y));
      setFunctionModule(
        modules,
        reserved,
        centerX + x,
        centerY + y,
        distance !== 1,
      );
    }
  }
}

function reserveFormatAreas(modules: Matrix, reserved: boolean[][]) {
  for (let i = 0; i <= 5; i++) {
    setFunctionModule(modules, reserved, 8, i, false);
    setFunctionModule(modules, reserved, i, 8, false);
  }

  setFunctionModule(modules, reserved, 8, 7, false);
  setFunctionModule(modules, reserved, 8, 8, false);
  setFunctionModule(modules, reserved, 7, 8, false);

  for (let i = 0; i < 8; i++) {
    setFunctionModule(modules, reserved, QR_SIZE - 1 - i, 8, false);
  }
  for (let i = 8; i < 15; i++) {
    setFunctionModule(modules, reserved, 8, QR_SIZE - 15 + i, false);
  }
}

function drawFunctionPatterns(modules: Matrix, reserved: boolean[][]) {
  drawFinderPattern(modules, reserved, 0, 0);
  drawFinderPattern(modules, reserved, QR_SIZE - 7, 0);
  drawFinderPattern(modules, reserved, 0, QR_SIZE - 7);
  drawAlignmentPattern(modules, reserved, 22, 22);

  for (let i = 8; i < QR_SIZE - 8; i++) {
    const dark = i % 2 === 0;
    setFunctionModule(modules, reserved, i, 6, dark);
    setFunctionModule(modules, reserved, 6, i, dark);
  }

  setFunctionModule(modules, reserved, 8, QR_SIZE - 8, true);
  reserveFormatAreas(modules, reserved);
}

function maskCondition(x: number, y: number) {
  return (x + y) % 2 === 0;
}

function placeData(modules: Matrix, reserved: boolean[][], codewords: number[]) {
  const bits: number[] = [];
  codewords.forEach((byte) => appendBits(bits, byte, 8));

  let bitIndex = 0;
  let upward = true;

  for (let right = QR_SIZE - 1; right >= 1; right -= 2) {
    if (right === 6) right--;

    for (let vertical = 0; vertical < QR_SIZE; vertical++) {
      const y = upward ? QR_SIZE - 1 - vertical : vertical;

      for (let offset = 0; offset < 2; offset++) {
        const x = right - offset;
        if (reserved[y][x]) continue;

        const rawBit = bitIndex < bits.length ? bits[bitIndex] === 1 : false;
        modules[y][x] = maskCondition(x, y) ? !rawBit : rawBit;
        bitIndex++;
      }
    }

    upward = !upward;
  }
}

function getFormatBits() {
  const errorCorrectionLevelLow = 1;
  const maskPattern = 0;
  const data = (errorCorrectionLevelLow << 3) | maskPattern;
  let remainder = data;

  for (let i = 0; i < 10; i++) {
    remainder =
      (remainder << 1) ^ (((remainder >>> 9) & 1) === 1 ? 0x537 : 0);
  }

  return ((data << 10) | (remainder & 0x3ff)) ^ 0x5412;
}

function getBit(value: number, bit: number) {
  return ((value >>> bit) & 1) !== 0;
}

function drawFormatBits(modules: Matrix) {
  const bits = getFormatBits();

  for (let i = 0; i <= 5; i++) modules[i][8] = getBit(bits, i);
  modules[7][8] = getBit(bits, 6);
  modules[8][8] = getBit(bits, 7);
  modules[8][7] = getBit(bits, 8);
  for (let i = 9; i < 15; i++) modules[8][14 - i] = getBit(bits, i);

  for (let i = 0; i < 8; i++) modules[8][QR_SIZE - 1 - i] = getBit(bits, i);
  for (let i = 8; i < 15; i++) {
    modules[QR_SIZE - 15 + i][8] = getBit(bits, i);
  }

  modules[QR_SIZE - 8][8] = true;
}

function createQrMatrix(text: string) {
  const { modules, reserved } = createEmptyMatrix();
  const dataCodewords = makeDataCodewords(text);
  const errorCorrectionCodewords = reedSolomonRemainder(
    dataCodewords,
    ECC_CODEWORDS,
  );

  drawFunctionPatterns(modules, reserved);
  placeData(modules, reserved, [
    ...dataCodewords,
    ...errorCorrectionCodewords,
  ]);
  drawFormatBits(modules);

  return modules.map((row) => row.map(Boolean));
}

function matrixToPath(matrix: boolean[][]) {
  const commands: string[] = [];

  matrix.forEach((row, y) => {
    row.forEach((dark, x) => {
      if (!dark) return;
      commands.push(
        `M${x + QUIET_ZONE} ${y + QUIET_ZONE}h1v1h-1z`,
      );
    });
  });

  return commands.join("");
}

function QrCodeSvg({ value }: { value: string }) {
  const matrix = createQrMatrix(value);
  const viewBoxSize = QR_SIZE + QUIET_ZONE * 2;

  return (
    <svg
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      role="img"
      aria-label={`QR code for ${value}`}
      shapeRendering="crispEdges"
      className="h-full w-full"
    >
      <rect width={viewBoxSize} height={viewBoxSize} rx="2" fill="#fffbeb" />
      <path d={matrixToPath(matrix)} fill="#1c1917" />
    </svg>
  );
}

export default function DownloadQrBlock({
  className = "",
  url = DOWNLOAD_PAGE_URL,
}: DownloadQrBlockProps) {
  return (
    <section
      className={[
        "rounded-3xl border border-stone-800/70 bg-stone-900/45 p-5 md:p-6 shadow-2xl shadow-black/30 backdrop-blur-xl",
        className,
      ].join(" ")}
      aria-labelledby="download-qr-title"
    >
      <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
        <div className="h-36 w-36 shrink-0 rounded-2xl border border-amber-500/20 bg-amber-50 p-3 shadow-xl shadow-amber-950/30">
          <QrCodeSvg value={url} />
        </div>

        <div>
          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-amber-400/80">
            Scan to download
          </p>
          <h2
            id="download-qr-title"
            className="text-xl font-extrabold tracking-tight text-white"
          >
            Open this page on your phone
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-stone-400">
            On desktop? Scan the QR code and choose App Store or Google Play
            from your mobile browser.
          </p>
          <p className="mt-3 break-all rounded-xl border border-stone-800/70 bg-stone-950/60 px-3 py-2 text-xs font-medium text-stone-500">
            {url.replace("https://", "")}
          </p>
        </div>
      </div>
    </section>
  );
}
