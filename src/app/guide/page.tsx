import { Metadata } from "next";
import Link from "next/link";
import { Lexend_Giga } from "next/font/google";

const lexendGiga = Lexend_Giga({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Polyglot Engine — How Cinemaly Works",
  description:
    "Learn how Cinemaly turns your photos and travel route into an interactive cinematic map. No login needed, zero data stored, works entirely in your browser.",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "The Polyglot Engine — How Cinemaly Works",
    description:
      "Learn how Cinemaly turns your photos and travel route into an interactive cinematic map. No login needed, zero data stored, works entirely in your browser.",
    url: "/guide",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Cinemaly - Cinematic Travel Documentation",
      },
    ],
  },
};

export default function Guide() {
  const steps = [
    {
      num: "01",
      title: "Select Your Photos",
      desc: (
        <>
          Upload as many files as you want in a single batch. Everything is
          processed locally in your browser —{" "}
          <span className="text-amber-400 font-semibold">
            no file is ever sent to a server.
          </span>
        </>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Define Your Route",
      desc: (
        <>
          Add the cities and regions you want to fly through. You can attach a
          personal note or memory to each stop.
        </>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Seal the Capsule",
      desc: (
        <>
          A single .html file containing all your data is generated and
          downloaded. Share it, archive it, or open it whenever you like —{" "}
          <span className="text-amber-400 font-semibold">
            no server needed.
          </span>
        </>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Unlock the Experience",
      desc: (
        <>
          Open the downloaded .html file in any browser and{" "}
          <span className="text-amber-400 font-semibold">
            drop the exact same file
          </span>{" "}
          into the prompt to decrypt and launch your cinematic map.
        </>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-950 text-stone-200 font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200 relative">
      <main className="relative z-10 flex-1 pt-24 md:pt-32 pb-20 px-4 sm:px-6 flex flex-col items-center w-full">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h1
              className={`${lexendGiga.className} text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-3`}
            >
              The{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-orange-400 to-rose-400">
                Polyglot Engine
              </span>
            </h1>
            <p className="text-stone-400 font-medium text-sm md:text-base max-w-2xl mx-auto px-2">
              Transform your travel memories into an interactive cinematic
              capsule in simple steps.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-14 md:mb-16">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                ),
                label: "No Login",
                sub: "No account or sign-up required",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
                    />
                  </svg>
                ),
                label: "Zero Data Stored",
                sub: "Your photos and route never leave your browser",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-stone-900/30 border border-stone-800/60 hover:border-stone-700/80 rounded-xl px-4 py-3 transition-all duration-200 group"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform duration-200">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-none mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-stone-500 leading-none">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 mb-6 md:mb-10">
            <div className="flex-1 h-px bg-linear-to-r from-transparent to-stone-800/60"></div>
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
                How It Works
              </span>
              <span className="text-[10px] text-amber-500/70 font-medium mt-1 uppercase tracking-wider">
                In 4 simple steps
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent to-stone-800/60"></div>
          </div>

          <div className="flex flex-col gap-4 mb-16 md:mb-24">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-5 md:gap-7 bg-stone-900/25 hover:bg-stone-900/40 border border-stone-800/50 hover:border-stone-700/60 rounded-2xl p-5 md:p-7 transition-all duration-300"
              >
                <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-[10px] font-bold text-amber-500/60 tracking-widest">
                      {step.num}
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-stone-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-16 md:mb-24">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="flex-1 h-px bg-linear-to-r from-transparent to-stone-800/60"></div>
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
                Platform Support
              </span>
              <div className="flex-1 h-px bg-linear-to-l from-transparent to-stone-800/60"></div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-stone-800/60">
              <div className="grid grid-cols-3 bg-stone-900/50 px-5 py-3 border-b border-stone-800/60">
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
                  Platform
                </span>
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest text-center">
                  Create
                </span>
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest text-center">
                  View
                </span>
              </div>
              {[
                {
                  platform: "Desktop — Chrome, Firefox, Edge, Safari",
                  create: true,
                  view: true,
                },
                { platform: "Android — Chrome", create: true, view: true },
                {
                  platform: "iOS — Safari, Chrome, Edge",
                  create: true,
                  view: false,
                  note: true,
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 px-5 py-4 items-center ${i < 2 ? "border-b border-stone-800/40" : ""} ${row.note ? "bg-amber-500/3" : "bg-stone-900/20"}`}
                >
                  <span
                    className={`text-xs font-medium ${row.note ? "text-stone-400" : "text-stone-300"}`}
                  >
                    {row.platform}
                  </span>
                  <div className="flex justify-center">
                    {row.create ? (
                      <span className="text-sm text-emerald-400">✓</span>
                    ) : (
                      <span className="text-sm text-rose-400">✗</span>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {row.view ? (
                      <span className="text-sm text-emerald-400">✓</span>
                    ) : (
                      <span className="text-sm text-amber-500">⚠</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-start gap-3 px-4 py-3.5 bg-amber-500/5 border border-amber-500/15 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-amber-500/70 mt-0.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <p className="text-xs text-stone-400 leading-relaxed">
                <span className="text-amber-400/80 font-semibold">
                  iOS limitation:
                </span>{" "}
                Creating a capsule works on iOS. Viewing one does not — all
                browsers on iOS share Apple's WebKit engine, which has a
                restriction with binary file reading in the browser. For the
                best experience,{" "}
                <span className="text-stone-300 font-medium">
                  use a desktop browser or Android Chrome.
                </span>
              </p>
            </div>
          </div>

          <div className="relative bg-stone-900/40 border border-amber-500/15 rounded-3xl p-7 md:p-10 overflow-hidden mb-8">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-amber-300 to-orange-500 rounded-l-3xl"></div>
            <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/5 blur-[80px] pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-amber-400 mb-1">
                    The Polyglot Architecture
                  </h3>
                  <p className="text-stone-500 text-xs md:text-sm">
                    One file. Two completely different behaviors.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 mb-7 p-5 bg-stone-950/50 rounded-2xl border border-stone-800/50">
                <div className="flex-1 text-center">
                  <div className="inline-flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-stone-800 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-stone-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-[11px] font-semibold text-stone-400">
                      Raw Assets
                    </span>
                    <span className="text-[10px] text-stone-600">
                      Photos & JSON Data
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-500/50">
                  <div className="w-8 h-px bg-amber-500/30 sm:w-12"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="shrink-0 text-center">
                  <div className="inline-flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-amber-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.75}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-[11px] font-semibold text-amber-400">
                      Client-Side Compiler
                    </span>
                    <span className="text-[10px] text-stone-600">
                      Zero server processing
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-500/50">
                  <div className="w-8 h-px bg-amber-500/30 sm:w-12"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-orange-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-[11px] font-semibold text-orange-400">
                      Polyglot Capsule
                    </span>
                    <span className="text-[10px] text-stone-600">
                      .html & .zip simultaneously
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div className="bg-stone-950/40 rounded-xl p-4 border border-stone-800/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-md bg-blue-500/15 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-blue-400">
                      Browser Execution (HTML)
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed pl-7">
                    When opened in a browser, the embedded React engine boots
                    up, decrypts the hidden binary data on the fly, and renders
                    a cinematic, interactive map documentary.
                  </p>
                </div>
                <div className="bg-stone-950/40 rounded-xl p-4 border border-stone-800/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-md bg-amber-500/15 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 text-amber-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-amber-400">
                      Data Extraction (ZIP)
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed pl-7">
                    Because the file headers comply with standard ZIP protocols,
                    you can rename it to .zip or open it with WinRAR to extract
                    your high-res photos and raw JSON data forever.
                  </p>
                </div>
              </div>

              <details className="mt-8 group border border-stone-800/60 bg-stone-950/80 rounded-2xl overflow-hidden transition-all duration-300">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer select-none outline-none hover:bg-stone-900/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-stone-800/80 flex items-center justify-center text-stone-400 group-hover:text-amber-400 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <span className="font-bold text-sm md:text-base text-stone-300 group-hover:text-white transition-colors">
                      Deep Technical Analysis{" "}
                      <span className="text-stone-600 font-normal ml-1">
                        (For Engineers)
                      </span>
                    </span>
                  </div>
                  <div className="text-stone-500 group-open:rotate-180 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="p-4 md:p-6 pt-2 text-xs md:text-sm text-stone-400 border-t border-stone-800/60 bg-stone-900/20 leading-relaxed">
                  <p className="mb-4">
                    The Polyglot Engine operates by exploiting how different
                    parsers interpret file signatures. Here is the *step-by-step
                    memory manipulation* occurring under the hood:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-amber-500 font-black mt-0.5">
                        01
                      </span>
                      <div>
                        <strong className="text-stone-200 block mb-0.5">
                          Parser Bypass (The Killer Tag)
                        </strong>
                        We inject an HTML_COMMENT_TAG opening tag right at the
                        end of the HTML structure. When a browser reads the
                        file, the DOM parser stops rendering immediately,
                        completely ignoring the trailing binary data (ZIP
                        structure) appended at the bottom. This prevents
                        rendering crashes.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-500 font-black mt-0.5">
                        02
                      </span>
                      <div>
                        <strong className="text-stone-200 block mb-0.5">
                          The Magic Pointer
                        </strong>
                        To separate the executable code from the raw data, we
                        embed a specific byte sequence:{" "}
                        <code className="text-amber-400 bg-amber-400/10 px-1 py-0.5 rounded">
                          ___MLX_ZIP_START___
                        </code>
                        . When the file is dropped into the app, we read it as a
                        raw <code className="text-blue-400">ArrayBuffer</code>,
                        scan backwards to find this exact memory pointer, and
                        slice the buffer.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-500 font-black mt-0.5">
                        03
                      </span>
                      <div>
                        <strong className="text-stone-200 block mb-0.5">
                          In-Memory Virtualization
                        </strong>
                        Once the binary slice is isolated, it is synchronously
                        decompressed using{" "}
                        <code className="text-blue-400">fflate</code>. The
                        extracted image bytes are dynamically converted into{" "}
                        <code className="text-blue-400">Blob URLs</code> in the
                        browser's memory. These temporary pointers are directly
                        injected into the React Virtual DOM, rendering the map
                        gallery *without a single byte touching a physical
                        server*.
                      </div>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 py-4 px-8 bg-linear-to-r from-amber-500 to-orange-500 text-stone-950 font-black text-sm rounded-2xl hover:from-amber-400 hover:to-orange-400 transition-all hover:-translate-y-0.5 shadow-[0_0_30px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_0_40px_-8px_rgba(251,146,60,0.6)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 3l14 9-14 9V3z"
                />
              </svg>
              Create Your Capsule
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
