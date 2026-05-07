import type { ReactNode } from "react";

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/cinemaly/id6763919834";

/** Google Play listing URL — set when live (empty = placeholder button). */
export const GOOGLE_PLAY_URL = "";

function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M10 8.5v7l5.25-3.5L10 8.5z" />
    </svg>
  );
}

type Props = {
  /** e.g. dismiss control for floating banner */
  topRight?: ReactNode;
  className?: string;
};

export default function AmberStoreDownloadCard({
  topRight,
  className = "",
}: Props) {
  const googleLive = Boolean(GOOGLE_PLAY_URL.trim());

  return (
    <div
      className={`relative rounded-2xl bg-linear-to-br from-amber-400 via-amber-500 to-orange-500 px-3 py-2.5 sm:px-4 sm:py-3 shadow-2xl shadow-amber-950/40 backdrop-blur-[2px] ${className}`}
    >
      {topRight}
      <p
        className={`text-center text-[11px] sm:text-xs font-bold text-stone-900 tracking-wide mb-2 leading-snug drop-shadow-sm ${topRight ? "pr-7" : ""}`}
      >
        For the best experience, we recommend using the{" "}
        <span className="font-extrabold text-stone-950 underline decoration-stone-950/35 underline-offset-2">
          mobile app
        </span>
        .
      </p>

      <div className="flex flex-col sm:flex-row items-stretch justify-center gap-2 sm:gap-2.5">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 min-h-[40px] rounded-xl bg-stone-950 border border-stone-800 hover:bg-stone-900 hover:border-stone-700 text-white text-xs font-semibold tracking-wide transition-colors duration-150 px-3 shadow-md shadow-stone-950/40"
        >
          <AppleGlyph className="w-5 h-5 shrink-0 text-white" />
          <span className="leading-tight text-left">
            App Store
            <span className="block text-[10px] font-normal text-stone-400">
              Download on iOS
            </span>
          </span>
        </a>

        {googleLive ? (
          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 min-h-[40px] rounded-xl bg-stone-950 border border-stone-800 hover:bg-stone-900 hover:border-stone-700 text-white text-xs font-semibold tracking-wide transition-colors duration-150 px-3 shadow-md shadow-stone-950/40"
          >
            <PlayGlyph className="w-5 h-5 shrink-0 text-emerald-400" />
            <span className="leading-tight text-left">
              Google Play
              <span className="block text-[10px] font-normal text-stone-400">
                Get it on Android
              </span>
            </span>
          </a>
        ) : (
          <span
            className="flex flex-1 items-center justify-center gap-2 min-h-[40px] rounded-xl bg-stone-950/35 border border-stone-900/25 text-stone-900/65 text-xs font-semibold tracking-wide px-3 cursor-not-allowed"
            title="Google Play link coming soon"
          >
            <PlayGlyph className="w-5 h-5 shrink-0 text-stone-900/45" />
            <span className="leading-tight text-left">
              Google Play
              <span className="block text-[10px] font-normal text-stone-900/50">
                Coming soon
              </span>
            </span>
          </span>
        )}
      </div>
    </div>
  );
}
