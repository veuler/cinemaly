import Link from "next/link";
import { Lexend_Giga } from "next/font/google";

const lexendGiga = Lexend_Giga({
  subsets: ["latin"],
  display: "swap",
});

export type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalDocumentProps = {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export default function LegalDocument({
  title,
  lastUpdated,
  sections,
}: LegalDocumentProps) {
  return (
    <div className="min-h-screen flex flex-col bg-stone-950 text-stone-200 font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200">
      <main className="relative z-10 flex-1 pt-24 md:pt-32 pb-20 px-4 sm:px-6 w-full">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] text-stone-600 mb-3 tracking-wide">
            Last updated: {lastUpdated}
          </p>
          <h1
            className={`${lexendGiga.className} text-xl md:text-2xl font-extrabold text-white tracking-tight mb-10`}
          >
            {title}
          </h1>
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-sm font-bold text-stone-300 mb-3">
                  {section.title}
                </h2>
                <div className="space-y-3 text-xs md:text-sm text-stone-400 leading-relaxed">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <p className="mt-14 pt-8 border-t border-stone-800/50">
            <Link
              href="/"
              className="text-xs text-stone-500 hover:text-amber-400/90 transition-colors"
            >
              ← Back to Cinemaly
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
