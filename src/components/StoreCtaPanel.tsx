import type { ReactNode } from "react";

import StoreButtons from "@/components/StoreButtons";

type StoreCtaPanelProps = {
  campaign?: string;
  children?: ReactNode;
  className?: string;
  ctaPosition?: string;
  description?: string;
  eyebrow?: string;
  title?: string;
  variant?: "hero" | "compact" | "footer";
};

const variantClasses = {
  hero: "p-5 md:p-6 rounded-3xl",
  compact: "p-4 rounded-2xl",
  footer: "p-6 md:p-8 rounded-3xl",
};

export default function StoreCtaPanel({
  campaign = "download",
  children,
  className = "",
  ctaPosition = "store_cta",
  description = "Create cinematic travel map stories from your trips.",
  eyebrow = "Available for iPhone and Android",
  title = "Download Cinemaly",
  variant = "hero",
}: StoreCtaPanelProps) {
  return (
    <section
      className={[
        "relative overflow-hidden border border-amber-500/20 bg-stone-900/55 shadow-2xl shadow-black/40 backdrop-blur-2xl",
        variantClasses[variant],
        className,
      ].join(" ")}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-300/80 to-transparent" />
      <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-amber-500/10 blur-[80px]" />
      <div className="absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-orange-500/10 blur-[90px]" />

      <div className="relative z-10">
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.24em] text-amber-400/90">
          {eyebrow}
        </p>
        <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-white">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-stone-400">
          {description}
        </p>

        <StoreButtons
          campaign={campaign}
          ctaPosition={ctaPosition}
          className="mt-5"
          size={variant === "compact" ? "default" : "large"}
        />

        {children && <div className="mt-5">{children}</div>}
      </div>
    </section>
  );
}
