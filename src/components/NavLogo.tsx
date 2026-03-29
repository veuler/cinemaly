import Image from "next/image";
import Link from "next/link";

function NavLogo() {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-lg border-b border-stone-800/50 transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Cinemaly"
                width={120}
                height={64}
                priority
                className="h-12 md:h-16 w-auto"
              />
            </Link>
          </div>

          <div className="flex items-center gap-5 md:gap-8">
            <Link
              prefetch={false}
              href="/guide"
              className="text-xs md:text-sm font-semibold text-stone-400 hover:text-amber-400 transition-colors"
            >
              Guide
            </Link>
            <Link
              prefetch={false}
              href="/contact"
              className="text-xs md:text-sm font-semibold text-stone-400 hover:text-amber-400 transition-colors"
            >
              Contact
            </Link>
            <Link
              prefetch={false}
              href="/blog"
              className="text-xs md:text-sm font-semibold text-stone-400 hover:text-amber-400 transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavLogo;
