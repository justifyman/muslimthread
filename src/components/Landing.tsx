export default function Landing() {
  return (
    <>
      <div className="fixed top-0 left-0 z-[-2] h-full w-full bg-white dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(0,0,0,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] transition-colors duration-300"></div>

      <header className="min-h-screen flex flex-col items-center justify-center p-8 relative">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-slate-800 dark:text-[#e9f7f5] text-7xl font-thin fadeInBottomToTop transition-colors duration-300">
            muslimthread
          </h1>
          <h2 className="text-slate-600 dark:text-[#bdbdbd] fadeInBottomToTop transition-colors duration-300 text-2xl font-light">
            find beginner trusted islamic resources for what you need
          </h2>
          <p className="text-slate-600 dark:text-[#9b9b9b] fadeInBottomToTop transition-colors duration-300 text-lg max-w-2xl mx-auto delay-150">
            A curated collection of authentic Islamic knowledge sources, from scholarly works to educational materials, all in one place.
          </p>
          <div className="pt-8 fadeInBottomToTop delay-300">
            <div 
              onClick={() => document.getElementById('threads-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 text-blue-400 dark:text-blue-300 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 cursor-pointer"
            >
              Explore Resources
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fadeInBottomToTop delay-500">
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-slate-400 dark:text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </header>
    </>
  );
}
