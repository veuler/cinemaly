"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import AmberStoreDownloadCard from "@/components/AmberStoreDownloadCard";

const STORAGE_KEY = "cinemaly-mobile-store-banner-dismissed";

export default function MobileStoreBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* ignore */
    }
    setMounted(true);
    setVisible(true);
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimateIn(true)),
    );
    return () => cancelAnimationFrame(id);
  }, []);

  const dismiss = () => {
    setAnimateIn(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    window.setTimeout(() => setVisible(false), 420);
  };

  if (!mounted || !visible) return null;

  const shell = (
    <div
      className={[
        "fixed left-1/2 z-48 w-[min(92vw,22rem)] sm:w-[min(92vw,26rem)]",
        "top-auto bottom-[calc(0.75rem+env(safe-area-inset-bottom,0px))]",
        /* Tighter to nav on md+ so the card sits higher and clears the hero headline */
        "md:top-[calc(5.2rem+env(safe-area-inset-top,0px))] md:bottom-auto",
        "-translate-x-1/2 pointer-events-auto",
        "transition-[transform,opacity] duration-420 ease-[cubic-bezier(0.22,1,0.36,1)]",
        animateIn
          ? "translate-y-0 opacity-100"
          : "translate-y-[calc(100%+2rem)] md:-translate-y-[calc(100%+2rem)] opacity-0",
      ].join(" ")}
      role="region"
      aria-label="Mobile app availability"
    >
      <AmberStoreDownloadCard
        topRight={
          <button
            type="button"
            onClick={dismiss}
            className="absolute right-2 top-2 rounded-lg p-1 text-stone-900/55 hover:bg-stone-900/10 hover:text-stone-900 transition-colors"
            aria-label="Dismiss"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        }
      />
    </div>
  );

  return createPortal(shell, document.body);
}
