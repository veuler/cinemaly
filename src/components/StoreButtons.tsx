import type { ComponentType } from "react";

import {
  getTrackedStoreUrl,
  storeLinks,
  type StorePlatform,
} from "@/components/storeLinks";

type StoreButtonSize = "compact" | "default" | "large";
type StoreButtonLayout = "row" | "stack";
type StoreButtonTone = "dark" | "light";

type StoreButtonsProps = {
  campaign?: string;
  className?: string;
  ctaPosition?: string;
  layout?: StoreButtonLayout;
  showSubtext?: boolean;
  size?: StoreButtonSize;
  tone?: StoreButtonTone;
};

type StoreButtonConfig = {
  platform: StorePlatform;
  href: string;
  label: string;
  subtext: string;
  ariaLabel: string;
  icon: ComponentType<{ className?: string }>;
  iconClassName: string;
};

export function AppleGlyph({ className }: { className?: string }) {
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

export function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M3.74 2.52c-.44.25-.74.78-.74 1.46v16.04c0 .68.3 1.21.74 1.46l9.32-9.48L3.74 2.52z" />
      <path d="M15.52 9.47 5.55 2.86l8.6 8.75 1.37-2.14z" />
      <path d="M5.55 21.14l9.97-6.61-1.37-2.14-8.6 8.75z" />
      <path d="M20.27 10.78 16.8 8.48 15.18 11l1.62 2.52 3.47-2.3c.97-.64.97-1.8 0-2.44z" />
    </svg>
  );
}

const storeButtonConfigs: StoreButtonConfig[] = [
  {
    platform: "ios",
    href: storeLinks.ios,
    label: "App Store",
    subtext: "Download on iPhone",
    ariaLabel: "Download Cinemaly on the App Store",
    icon: AppleGlyph,
    iconClassName: "text-white",
  },
  {
    platform: "android",
    href: storeLinks.android,
    label: "Google Play",
    subtext: "Get it on Android",
    ariaLabel: "Get Cinemaly on Google Play",
    icon: PlayGlyph,
    iconClassName: "text-emerald-400",
  },
];

const sizeClasses: Record<StoreButtonSize, string> = {
  compact: "min-h-[40px] px-3 text-xs",
  default: "min-h-[46px] px-4 text-sm",
  large: "min-h-[54px] px-5 text-sm md:text-base",
};

const iconSizeClasses: Record<StoreButtonSize, string> = {
  compact: "w-5 h-5",
  default: "w-5 h-5",
  large: "w-6 h-6",
};

const layoutClasses: Record<StoreButtonLayout, string> = {
  row: "flex-col sm:flex-row",
  stack: "flex-col",
};

const toneClasses: Record<StoreButtonTone, string> = {
  dark:
    "bg-stone-950 border-stone-800 hover:bg-stone-900 hover:border-stone-700 text-white shadow-md shadow-stone-950/40",
  light:
    "bg-white/95 border-white hover:bg-amber-50 text-stone-950 shadow-lg shadow-amber-950/20",
};

export default function StoreButtons({
  campaign = "download",
  className = "",
  ctaPosition = "store_buttons",
  layout = "row",
  showSubtext = true,
  size = "default",
  tone = "dark",
}: StoreButtonsProps) {
  return (
    <div
      className={[
        "flex items-stretch justify-center gap-2 sm:gap-2.5",
        layoutClasses[layout],
        className,
      ].join(" ")}
    >
      {storeButtonConfigs.map((store) => {
        const Icon = store.icon;
        const href = getTrackedStoreUrl(store.href, {
          platform: store.platform,
          campaign,
          content: ctaPosition,
        });
        const isLive = Boolean(href);

        if (!isLive) {
          return (
            <span
              key={store.platform}
              className={[
                "flex flex-1 items-center justify-center gap-2 rounded-xl border font-semibold tracking-wide cursor-not-allowed",
                sizeClasses[size],
                "bg-stone-950/35 border-stone-900/25 text-stone-900/65",
              ].join(" ")}
              title={`${store.label} link coming soon`}
            >
              <Icon
                className={[
                  iconSizeClasses[size],
                  "shrink-0 text-stone-900/45",
                ].join(" ")}
              />
              <span className="leading-tight text-left">
                {store.label}
                {showSubtext && (
                  <span className="block text-[10px] font-normal text-stone-900/50">
                    Coming soon
                  </span>
                )}
              </span>
            </span>
          );
        }

        return (
          <a
            key={store.platform}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={store.ariaLabel}
            className={[
              "flex flex-1 items-center justify-center gap-2 rounded-xl border font-semibold tracking-wide transition-colors duration-150",
              sizeClasses[size],
              toneClasses[tone],
            ].join(" ")}
          >
            <Icon
              className={[
                iconSizeClasses[size],
                "shrink-0",
                store.iconClassName,
              ].join(" ")}
            />
            <span className="leading-tight text-left">
              {store.label}
              {showSubtext && (
                <span
                  className={[
                    "block text-[10px] font-normal",
                    tone === "dark" ? "text-stone-400" : "text-stone-600",
                  ].join(" ")}
                >
                  {store.subtext}
                </span>
              )}
            </span>
          </a>
        );
      })}
    </div>
  );
}
