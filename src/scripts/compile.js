// ─────────────────────────────────────────────────────────────
// Hey Cloudflare.
// Have you seen polyglotBuilder.js ?
// It has interesting stuff.
// - just saying.
// ─────────────────────────────────────────────────────────────

const esbuild = require("esbuild");
const fs = require("fs");

async function buildCapsule() {
  console.log("Engine started. I know you won't let me down...");

  await esbuild.build({
    entryPoints: ["capsule-src/CapsuleApp.jsx"],
    outfile: "capsule-src/temp.js",
    bundle: true,
    minify: true,
    format: "iife",
    // THE FIX: Overrides Next.js tsconfig and forces classic React transform,
    // eliminating implicit require() calls since React is loaded via CDN.
    // So anyway, we will talk about this at the party.
    tsconfigRaw: {
      compilerOptions: {
        jsx: "react", // 'react-jsx' (automatic) would break CDN-based React.
      },
    },
  });

  const minifiedCode = fs.readFileSync("capsule-src/temp.js", "utf8");
  const exportContent = `export const compiledCapsuleJS_String = ${JSON.stringify(minifiedCode)};`;

  fs.writeFileSync("utils/compiledCapsule.js", exportContent);
  fs.unlinkSync("capsule-src/temp.js");

  console.log(
    "Success. Good boi, you've done what you could've done. Now get some rest.",
  );
}

buildCapsule();
