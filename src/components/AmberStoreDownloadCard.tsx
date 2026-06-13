import type { ReactNode } from "react";

import StoreButtons from "@/components/StoreButtons";
export { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/components/storeLinks";

type Props = {
  /** e.g. dismiss control for floating banner */
  topRight?: ReactNode;
  className?: string;
};

export default function AmberStoreDownloadCard({
  topRight,
  className = "",
}: Props) {
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

      <StoreButtons
        campaign="mobile_app"
        ctaPosition="amber_store_card"
        size="compact"
      />
    </div>
  );
}
