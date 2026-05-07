import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This page does not exist on Cinemaly. Return home, read the blog, or learn how the app works.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans antialiased relative overflow-hidden">
      <div
        className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-black opacity-90"
        aria-hidden
      />
      <main className="relative z-10 max-w-lg mx-auto px-4 sm:px-6 pt-28 md:pt-36 pb-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400/90 mb-4">
          404
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Page not found
        </h1>
        <p className="text-stone-400 text-sm md:text-base mb-10 leading-relaxed">
          The page you are looking for may have been moved or removed. Pick a
          destination below to keep exploring Cinemaly.
        </p>
        <nav
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
          aria-label="Helpful links"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-stone-700/80 bg-stone-900/50 px-5 py-3 text-sm font-semibold text-stone-100 transition hover:border-amber-500/45 hover:text-amber-200 hover:bg-stone-900/80"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-xl border border-stone-700/80 bg-stone-900/50 px-5 py-3 text-sm font-semibold text-stone-100 transition hover:border-amber-500/45 hover:text-amber-200 hover:bg-stone-900/80"
          >
            Blog
          </Link>
          <Link
            href="/guide"
            className="inline-flex items-center justify-center rounded-xl border border-amber-500/35 bg-amber-500/10 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-400/60 hover:bg-amber-500/15"
          >
            Guide
          </Link>
        </nav>
      </main>
    </div>
  );
}
