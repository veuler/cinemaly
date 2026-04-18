import Image from "next/image";
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full border-t border-stone-800/50 bg-stone-950/80 backdrop-blur-xl mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-6 md:py-8 flex flex-col gap-6 md:gap-8">
        {/* ── TOP SECTION: Logo, Desc & Links ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex flex-col justify-center items-center lg:flex-row gap-5 text-center md:text-left">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Cinemaly"
                width={120}
                height={32}
                className="h-12 md:h-16 w-auto"
              />
            </Link>
            <p className="text-[10px] md:text-xs text-stone-500 max-w-xs lg:max-w-max leading-relaxed">
              Transform your photos and routes into a cinematic experience
              powered by an autonomous map engine.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/guide"
              className="text-xs font-semibold text-stone-400 hover:text-amber-400 transition-colors"
            >
              Guide
            </Link>
            <Link
              href="/contact"
              className="text-xs font-semibold text-stone-400 hover:text-amber-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* ── BOTTOM SECTION: Copyright & legal ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 pt-5 border-t border-stone-800/50 text-[10px] text-stone-600">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <p className="font-medium tracking-wide text-stone-600">
              &copy; {currentYear} Cinemaly. All rights reserved.
            </p>
            <p className="text-[9px] sm:text-[10px] text-stone-600/45 font-normal tracking-wide flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
              <Link
                href="/terms"
                className="hover:text-stone-500/80 transition-colors underline-offset-2 hover:underline"
              >
                Terms of Use
              </Link>
              <span className="text-stone-700/60 select-none" aria-hidden>
                ·
              </span>
              <Link
                href="/privacy"
                className="hover:text-stone-500/80 transition-colors underline-offset-2 hover:underline"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
          <p className="flex items-center gap-1.5">
            Engineered with{" "}
            <span className="text-amber-500 text-[11px]">⚡</span> for
            travelers.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
