import type { Metadata } from "next";

import DownloadQrBlock from "@/components/DownloadQrBlock";
import StoreCtaPanel from "@/components/StoreCtaPanel";
import { storeLinks } from "@/components/storeLinks";

const cinemalyAggregateRating = {
  "@type": "AggregateRating",
  ratingValue: 4.8,
  ratingCount: 5,
  bestRating: 5,
  worstRating: 1,
};

export const metadata: Metadata = {
  title: "Download Cinemaly for iPhone and Android",
  description:
    "Get Cinemaly on the App Store and Google Play. Create cinematic travel map stories and track visited cities and countries in the World tab.",
  alternates: { canonical: "/download" },
  openGraph: {
    title: "Download Cinemaly for iPhone and Android",
    description:
      "Get Cinemaly on the App Store and Google Play. Create cinematic travel map stories and track visited cities and countries in the World tab.",
    url: "/download",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Download Cinemaly for iPhone and Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Cinemaly for iPhone and Android",
    description:
      "Get Cinemaly on the App Store and Google Play. Create cinematic travel map stories and track visited cities and countries in the World tab.",
    images: ["/opengraph-image.png"],
  },
};

const features = [
  {
    title: "Cinematic travel maps",
    description:
      "Watch your route unfold stop by stop with animated map playback.",
    iconPath:
      "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  },
  {
    title: "Social-ready videos",
    description:
      "Turn trip routes, photos, and notes into cinematic recap videos.",
    iconPath:
      "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  },
  {
    title: "World map tracker",
    description:
      "Add visited cities and countries, color them on a world map, and see travel stats.",
    iconPath:
      "M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.5-2.3 4-5.4 4-9s-1.5-6.7-4-9m0 18c-2.5-2.3-4-5.4-4-9s1.5-6.7 4-9m-7 9h14",
  },
  {
    title: "Portable capsules",
    description: "Save and share private .cnmly travel capsules with friends.",
    iconPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    title: "No account required",
    description:
      "Cinemaly has no account system, login, or server-side capsule storage.",
    iconPath:
      "M12 11c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm0 0c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3-3 1.343-3 3zm-8 9a5 5 0 0110 0m-4 0a5 5 0 0110 0",
  },
];

const faqs = [
  {
    question: "Is Cinemaly available on iPhone?",
    answer:
      "Yes. Cinemaly is available on the App Store for iPhone. Open this page on your iPhone and tap the App Store button to install the mobile app.",
  },
  {
    question: "Is Cinemaly available on Android?",
    answer:
      "Yes. Cinemaly is available on Google Play for Android phones and tablets. Open this page on your Android device and tap the Google Play button to install it.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No. Cinemaly does not require an account, email, login, or profile to create travel capsules. You can build a capsule directly on your device.",
  },
  {
    question: "Can I track visited countries and cities?",
    answer:
      "Yes. Cinemaly includes a World tab where you can add visited places, color cities or countries on a world map, and see simple travel statistics by country.",
  },
  {
    question: "Does Cinemaly upload my photos?",
    answer:
      "No. Cinemaly does not upload your photos, notes, videos, or travel capsules to a Cinemaly server. Your personal capsule content is created and kept on your device unless you choose to export or share it yourself.",
  },
  {
    question: "Does the app use the internet?",
    answer:
      "Inside the app, the limited external request is map/place search. When you search for a place, Cinemaly may send that location query to Nominatim/OpenStreetMap, but Cinemaly has no auth system, backend, or server that stores, processes, or saves your personal capsule content.",
  },
];

function FeatureIcon({ path }: { path: string }) {
  return (
    <svg
      className="h-5 w-5 text-amber-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

function JsonLd() {
  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cinemaly",
    applicationCategory: "TravelApplication",
    operatingSystem: "iOS, Android",
    url: "https://cinemaly.app/download",
    downloadUrl: [storeLinks.ios, storeLinks.android],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: cinemalyAggregateRating,
    description:
      "Cinemaly turns trip photos, routes, stops, and notes into private cinematic travel map stories, capsules, travel videos, and a World map of visited cities and countries.",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplication),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPage),
        }}
      />
    </>
  );
}

export default function DownloadPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-stone-950 text-stone-200 font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200 relative">
      <JsonLd />

      <div className="fixed inset-0 z-0 pointer-events-none bg-stone-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-black opacity-90" />
        <div className="ambient-orb animation-float-slow left-[-12%] top-[-15%] h-[46vh] w-[46vw] bg-amber-500/10 blur-[110px]" />
        <div className="ambient-orb animation-float-delayed bottom-[-18%] right-[-15%] h-[58vh] w-[58vw] bg-orange-500/10 blur-[140px]" />
        <div className="absolute inset-0 css-grid-pattern opacity-15 mask-[linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col px-4 pb-20 pt-28 sm:px-6 md:pt-36">
        <section className="mx-auto grid w-full items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-amber-300">
              iPhone and Android
            </p>
            <h1 className="font-giga text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Download{" "}
              <span className="bg-linear-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                Cinemaly
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-stone-400 md:text-lg">
              Create cinematic travel map stories from your trips. Add photos,
              stops, notes, and routes, then save a private capsule or a
              social-ready travel video. Use the World tab to track visited
              cities and countries on a visual map.
            </p>

            {/* <div className="mt-7 max-w-xl">
              <StoreButtons
                campaign="download"
                ctaPosition="hero"
                size="large"
              />
            </div> */}

            <p className="mt-4 text-xs leading-relaxed text-stone-500">
              Opening on iPhone? Use App Store. On Android? Use Google Play. On
              desktop, scan the QR code below or send this page to your phone.
            </p>
          </div>

          <StoreCtaPanel
            campaign="download"
            ctaPosition="hero_panel"
            description="Get the mobile app for capsule playback, sharing, travel videos, and the World visited places map."
            title="Your journeys, framed like cinema"
          >
            <div className="grid grid-cols-2 gap-2 text-center sm:grid-cols-4">
              {["Map", "Capsule", "Video", "World"].map((label) => (
                <div
                  key={label}
                  className="rounded-2xl border border-stone-800/70 bg-stone-950/45 px-3 py-3"
                >
                  <p className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                    {label}
                  </p>
                  <p className="mt-1 text-[10px] text-stone-500">Included</p>
                </div>
              ))}
            </div>
          </StoreCtaPanel>
        </section>

        <section className="mt-16 md:mt-20" aria-labelledby="features-title">
          <div className="mb-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-stone-800/70" />
            <h2
              id="features-title"
              className="text-center text-xs font-bold uppercase tracking-[0.24em] text-stone-400"
            >
              What you get
            </h2>
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-stone-800/70" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-stone-800/65 bg-stone-900/35 p-5 transition-colors hover:border-stone-700/80"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10">
                  <FeatureIcon path={feature.iconPath} />
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

        <section className="mt-12 grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-stone-800/70 bg-stone-900/40 p-5 md:p-6">
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-amber-400/80">
              Device-aware help
            </p>
            <h2 className="text-xl font-extrabold tracking-tight text-white">
              Choose the store for your device
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-400">
              The App Store link is for iPhone and iPad. The Google Play link is
              for Android phones and tablets.
            </p>

            <div className="mt-5 space-y-3">
              {[
                ["iPhone or iPad", "Tap App Store and install Cinemaly."],
                ["Android", "Tap Google Play and install Cinemaly."],
                [
                  "Desktop",
                  "Scan the QR code or send this page to your phone.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="flex gap-3 rounded-2xl border border-stone-800/60 bg-stone-950/45 p-4"
                >
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-amber-400 shadow-[0_0_14px_rgba(251,191,36,0.75)]" />
                  <div>
                    <h3 className="text-sm font-bold text-stone-100">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-stone-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <DownloadQrBlock />
        </section>

        <section className="mt-14 md:mt-20" aria-labelledby="download-faq">
          <div className="mx-auto max-w-3xl">
            <h2
              id="download-faq"
              className="text-center text-2xl font-extrabold tracking-tight text-white"
            >
              Download FAQ
            </h2>
            <div className="mt-7 overflow-hidden rounded-3xl border border-stone-800/70 bg-stone-900/35">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className={[
                    "group",
                    index !== faqs.length - 1
                      ? "border-b border-stone-800/60"
                      : "",
                  ].join(" ")}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-stone-100 transition-colors hover:bg-stone-900/60 md:px-6">
                    {faq.question}
                    <span className="text-amber-400 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-stone-400 md:px-6">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <StoreCtaPanel
          campaign="download"
          ctaPosition="footer"
          className="mt-14 md:mt-20"
          description="Start with your next trip, your last road trip, or the travel photos already sitting in your camera roll."
          title="Ready to build your first cinematic travel capsule?"
          variant="footer"
        />
      </main>
    </div>
  );
}
