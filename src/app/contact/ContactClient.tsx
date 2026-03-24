"use client";

function ContactClient() {
  const contactEmail = "contact@cinemaly.app";

  return (
    <div className="min-h-screen flex flex-col bg-stone-950 text-stone-200 font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200 relative">
      <main className="relative z-10 flex-1 pt-32 pb-16 px-4 sm:px-6 flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3 md:mb-4">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-orange-500">
              Touch
            </span>
          </h1>
          <p className="text-stone-400 font-medium text-sm md:text-lg">
            Reach out via email for feedback, bug reports, or partnership
            inquiries.
          </p>
        </div>

        <div className="w-full bg-stone-900/40 backdrop-blur-xl p-8 md:p-12 rounded-4xl border border-stone-700/40 shadow-2xl relative overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-amber-500/5 blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 md:mb-8 border border-amber-500/20 shadow-[0_0_30px_-5px_rgba(245,158,11,0.2)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 md:w-12 md:h-12 text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              Drop Us a Line
            </h2>
            <p className="text-stone-400 text-sm md:text-base mb-8 max-w-sm mx-auto">
              We are open to all your ideas and technical reports to help
              improve the project.
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-stone-950 border border-stone-700 hover:border-amber-500/50 rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.4)] hover:-translate-y-1"
            >
              <span className="text-amber-400 font-mono text-base md:text-lg tracking-wide group-hover:text-amber-300 transition-colors">
                {contactEmail}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-stone-500 group-hover:text-amber-400 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactClient;
