import PromoVideo from "@/components/PromoVideo";
import CapsuleGenerator from "@/components/CapsuleGenerator";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-stone-200 font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200 relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none bg-stone-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-black opacity-80"></div>

        <div className="ambient-orb w-[50vw] h-[50vh] top-[-10%] left-[-10%] bg-amber-600/10 blur-[120px] mix-blend-screen animation-float-slow"></div>
        <div className="ambient-orb w-[60vw] h-[60vh] bottom-[-10%] right-[-10%] bg-orange-600/10 blur-[150px] mix-blend-screen animation-float-delayed"></div>
        <div className="ambient-orb w-[40vw] h-[40vh] top-[30%] left-[50%] bg-blue-900/15 blur-[100px] mix-blend-screen animation-float"></div>

        <div className="absolute inset-0 css-grid-pattern opacity-20 mask-[linear-gradient(to_bottom,white,transparent)]"></div>
      </div>

      <main className="relative z-10 flex-1 pt-24 md:pt-32 pb-10 md:pb-16 px-0 sm:px-6 flex flex-col items-center justify-center w-full">
        <div className="max-w-3xl w-full bg-stone-900/35 backdrop-blur-3xl p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-4xl border border-stone-700/40 shadow-2xl shadow-black/60 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-amber-500/8 blur-[100px] pointer-events-none"></div>

          <div className="text-center mb-8 md:mb-12 relative z-10">
            <h1
              className={`font-giga text-xl sm:text-3xl font-extrabold text-[#d4d3d3] tracking-tight mb-3 leading-tight`}
            >
              Transform your digital footprint into a{" "}
              <br className="hidden sm:block" />
              <span
                className={`font-tera text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-orange-400 to-rose-400`}
              >
                cinematic documentary.
              </span>{" "}
            </h1>
            <p className="text-stone-400 font-medium text-sm md:text-lg max-w-xl mx-auto px-2">
              Upload your travel photos and route, and Cinemaly creates a free
              interactive cinematic map — no login, no server, zero data stored.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-5 md:mt-7">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-900/60 border border-stone-800/80 text-stone-400 text-[10px] font-semibold tracking-wide cursor-default">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 text-amber-400/80"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                No Login
              </span>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-900/60 border border-stone-800/80 text-stone-400 text-[10px] font-semibold tracking-wide cursor-default">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 text-amber-400/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Zero Data Stored
              </span>

              <a
                href="https://github.com/veuler/cinemaly"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-900/60 border border-stone-800/80 text-stone-400 hover:text-white hover:border-stone-600 text-[10px] font-semibold tracking-wide transition-colors duration-150"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                Open Source
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 h-2.5 opacity-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-900/60 border border-stone-800/80 text-stone-400 text-[10px] font-semibold tracking-wide cursor-default">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 text-amber-400/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Desktop & Android
              </span>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-900/60 border border-stone-800/80 text-stone-400 text-[10px] font-semibold tracking-wide cursor-default">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 text-amber-400/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Share with Anyone
              </span>
            </div>
          </div>

          <div className="w-full max-w-3xl mx-auto h-px bg-linear-to-r from-transparent via-amber-500/40 to-transparent mt-8 mb-6 md:mt-10 md:mb-8"></div>

          <PromoVideo />

          <div className="w-full max-w-3xl mx-auto h-px bg-linear-to-r from-transparent via-amber-500/40 to-transparent mt-8 mb-6 md:mt-10 md:mb-8"></div>

          <CapsuleGenerator />
        </div>
      </main>
    </div>
  );
}
