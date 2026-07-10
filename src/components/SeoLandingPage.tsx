import type { Metadata } from "next";
import Link from "next/link";

import StoreCtaPanel from "@/components/StoreCtaPanel";
import type { SeoLandingPageData } from "@/data/seoLandingPages";
import { storeLinks } from "@/components/storeLinks";

const cinemalyAggregateRating = {
  "@type": "AggregateRating",
  ratingValue: 4.8,
  ratingCount: 5,
  bestRating: 5,
  worstRating: 1,
};

export function createSeoLandingMetadata(page: SeoLandingPageData): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `/${page.slug}`,
      type: "website",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/opengraph-image.png"],
    },
  };
}

function JsonLd({ page }: { page: SeoLandingPageData }) {
  const pageUrl = `https://cinemaly.app/${page.slug}`;
  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cinemaly",
    applicationCategory: "TravelApplication",
    operatingSystem: "iOS, Android",
    url: pageUrl,
    downloadUrl: [storeLinks.ios, storeLinks.android],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: cinemalyAggregateRating,
    description: page.description,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cinemaly.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      {[softwareApplication, faqPage, breadcrumbList].map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

function FeatureIcon() {
  return (
    <svg
      className="h-5 w-5 text-amber-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
      />
    </svg>
  );
}

function splitAccent(text: string, accent: string) {
  const index = text.toLowerCase().indexOf(accent.toLowerCase());
  if (index === -1) return null;

  return {
    before: text.slice(0, index),
    match: text.slice(index, index + accent.length),
    after: text.slice(index + accent.length),
  };
}

export default function SeoLandingPage({ page }: { page: SeoLandingPageData }) {
  const h1Parts = splitAccent(page.h1, page.accent);
  const ctaTiles = page.ctaTiles ?? ["iOS", "Android", "Capsules"];

  return (
    <div className="min-h-screen overflow-hidden bg-stone-950 text-stone-200 font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200 relative">
      <JsonLd page={page} />

      <div className="fixed inset-0 z-0 pointer-events-none bg-stone-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-black opacity-90" />
        <div className="ambient-orb animation-float-slow left-[-12%] top-[-15%] h-[46vh] w-[46vw] bg-amber-500/10 blur-[110px]" />
        <div className="ambient-orb animation-float-delayed bottom-[-18%] right-[-15%] h-[58vh] w-[58vw] bg-orange-500/10 blur-[140px]" />
        <div className="absolute inset-0 css-grid-pattern opacity-15 mask-[linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col px-4 pb-20 pt-28 sm:px-6 md:pt-36">
        <section className="grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-amber-300">
              {page.eyebrow}
            </p>
            <h1 className="font-giga text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              {h1Parts ? (
                <>
                  {h1Parts.before}
                  <span className="bg-linear-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                    {h1Parts.match}
                  </span>
                  {h1Parts.after}
                </>
              ) : (
                page.h1
              )}
            </h1>
            <p className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-stone-400 md:text-lg">
              {page.intro}
            </p>

            {page.disclaimer && (
              <p className="mt-4 max-w-xl rounded-2xl border border-stone-800/70 bg-stone-900/45 px-4 py-3 text-xs leading-relaxed text-stone-500">
                {page.disclaimer}
              </p>
            )}
          </div>

          <StoreCtaPanel
            campaign={page.slug}
            ctaPosition="hero_panel"
            description={
              page.ctaDescription ??
              "Get Cinemaly for iPhone and Android, then turn your trip into a private map capsule or social-ready travel video."
            }
            title="Download Cinemaly"
          >
            <div className="grid grid-cols-3 gap-2 text-center">
              {ctaTiles.map((label) => (
                <div
                  key={label}
                  className="rounded-2xl border border-stone-800/70 bg-stone-950/45 px-3 py-3"
                >
                  <p className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                    {label}
                  </p>
                  <p className="mt-1 text-[10px] text-stone-500">Ready</p>
                </div>
              ))}
            </div>
          </StoreCtaPanel>
        </section>

        <section className="mt-16 md:mt-20" aria-labelledby="proof-title">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.24em] text-amber-400/80">
              Feature proof
            </p>
            <h2
              id="proof-title"
              className="text-2xl font-extrabold tracking-tight text-white md:text-3xl"
            >
              {page.proofTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-stone-400">
              {page.proofIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {page.features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-stone-800/65 bg-stone-900/35 p-5 transition-colors hover:border-stone-700/80"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10">
                  <FeatureIcon />
                </div>
                <h3 className="text-sm font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-stone-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:mt-20">
          <div className="rounded-3xl border border-stone-800/70 bg-stone-900/40 p-5 md:p-6">
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-amber-400/80">
              Keep exploring
            </p>
            <h2 className="text-xl font-extrabold tracking-tight text-white">
              Related Cinemaly guides
            </h2>
            <div className="mt-5 space-y-3">
              {page.internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-stone-800/60 bg-stone-950/45 p-4 text-sm font-bold text-stone-100 transition-colors hover:border-amber-500/30 hover:text-amber-300"
                >
                  {link.label}
                  <span className="text-amber-400" aria-hidden>
                    -&gt;
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div
            className="overflow-hidden rounded-3xl border border-stone-800/70 bg-stone-900/35"
            aria-labelledby="faq-title"
          >
            <div className="border-b border-stone-800/60 px-5 py-4 md:px-6">
              <p className="mb-1 text-[10px] font-black uppercase tracking-[0.22em] text-amber-400/80">
                FAQ
              </p>
              <h2
                id="faq-title"
                className="text-xl font-extrabold tracking-tight text-white"
              >
                Questions about {page.accent}
              </h2>
            </div>

            {page.faq.map((item, index) => (
              <details
                key={item.question}
                className={
                  index !== page.faq.length - 1
                    ? "group border-b border-stone-800/60"
                    : "group"
                }
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-stone-100 transition-colors hover:bg-stone-900/60 md:px-6">
                  {item.question}
                  <span className="text-amber-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-stone-400 md:px-6">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
