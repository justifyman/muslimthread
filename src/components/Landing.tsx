export default function Landing() {
  return (
    <>
      <div className="fixed top-0 left-0 z-[-2] h-full w-full bg-white dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.5),rgba(255,255,255,0))] transition-all duration-700"></div>

      <header className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
        <div className="text-center space-y-10 max-w-4xl mx-auto relative z-10">
          <h1 className="text-slate-800 dark:text-[#f0f9f8] text-xl md:text-7xl font-thin fadeInBottomToTop transition-all duration-400 ">
            muslimthread
          </h1>
          <h2 className="text-slate-600 dark:text-[#d1d1d1] fadeInBottomToTop transition-all duration-500 text-2xl md:text-3xl font-light tracking-wide px-4 hover:text-slate-800 dark:hover:text-white">
            find beginner trusted islamic resources for what you need
          </h2>
          <p className="text-slate-600 dark:text-[#a3a3a3] fadeInBottomToTop transition-all duration-500 text-lg md:text-xl max-w-2xl mx-auto delay-150 px-4 leading-relaxed hover:text-slate-800 dark:hover:text-[#d1d1d1]">
            A curated collection of authentic Islamic knowledge sources, from
            scholarly works to educational materials, all in one place.
          </p>
          <div className="pt-12 fadeInBottomToTop delay-300">
            <div
              onClick={() =>
                document
                  .getElementById("threads-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-400/20 via-blue-300/20 to-cyan-400/20 text-blue-500 dark:text-blue-300 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 cursor-pointer group hover:from-blue-400/30 hover:via-blue-300/30 hover:to-cyan-400/30"
            >
              <span className="transform transition-all duration-300 group-hover:translate-x-1">
                Explore Resources
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transform transition-all duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          onClick={() =>
            document
              .getElementById("threads-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 fadeInBottomToTop delay-500 cursor-pointer group"
        >
          <div className="animate-bounce hover:opacity-75 transition-all duration-300 p-2 rounded-full hover:bg-blue-400/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-slate-400 dark:text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </header>
    </>
  );
}
