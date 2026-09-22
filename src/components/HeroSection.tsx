export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-5 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-blue-300 text-sm font-medium tracking-wide">
            PROJECT PROPOSAL — AI INTERNAL REPORT
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
          Automated Internal{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Reporting
          </span>{" "}
          with AI
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up">
          A comprehensive proposal for TeamFicient to automate recurring internal reporting — 
          delivering consistent, timely summaries and KPIs to management without manual report preparation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <a
            href="#executive-summary"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            Read Full Proposal ↓
          </a>
          <a
            href="#cost"
            className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition-all"
          >
            View Pricing
          </a>
        </div>

        {/* Key info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 max-w-3xl mx-auto animate-slide-up">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white">6–8</div>
            <div className="text-sm text-slate-400 mt-1">Weeks to Deliver</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white">106–140</div>
            <div className="text-sm text-slate-400 mt-1">Estimated Hours</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white">$4,200–$6,000</div>
            <div className="text-sm text-slate-400 mt-1">Fixed Project Cost</div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}
