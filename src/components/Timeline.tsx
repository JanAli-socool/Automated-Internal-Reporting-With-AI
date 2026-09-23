import SectionWrapper from "./SectionWrapper";

const phases = [
  {
    week: "Week 1",
    phase: "Discovery & Environment Validation",
    hours: "14–16 hrs",
    color: "blue",
    tasks: [
      "Kick-off meeting and stakeholder interviews",
      "Validate current environment: Google Sheets, Workspace, Looker Studio (per RFP requirement)",
      "Identify all additional APIs, hosting, AI models, licenses, integrations, and services required",
      "Define the model-evaluation rubric for GPT-4o vs Claude / Gemini alternatives",
      "Audit all data sources and document KPI definitions and calculation logic",
      "Map data sources → report outputs → recipients",
      "Deliver Environment Validation Report with third-party costs itemized separately",
    ],
    milestone: "✅ Environment Validation Report + Requirements Doc signed off",
  },
  {
    week: "Week 2–3",
    phase: "Design & Core Development",
    hours: "28–36 hrs",
    color: "indigo",
    tasks: [
      "Design system architecture and data flow diagrams",
      "Set up Google Cloud project, service accounts, API credentials",
      "Build data extraction modules for each source sheet",
      "Implement validation engine with quality rules",
      "Develop data transformation and KPI calculation pipeline",
      "Set up Cloud Functions / Apps Script infrastructure",
    ],
    milestone: "✅ Data pipeline pulling and validating live data",
  },
  {
    week: "Week 3–4",
    phase: "AI Integration & Report Generation",
    hours: "24–32 hrs",
    color: "purple",
    tasks: [
      "Design and iterate on prompt templates for GPT-4o production use",
      "Run a small benchmark bake-off: GPT-4o vs Claude Fable 5.1 / Sonnet 5 / Gemini on sample reports",
      "Build the production integration on GPT-4o for narrative generation",
      "Build report templating engine (structured output format)",
      "Implement few-shot learning from sample/historical reports",
      "Create standardized output combining KPIs + AI narrative",
      "Develop report distribution logic (email, Google Docs)",
    ],
    milestone: "✅ First fully automated report generated end-to-end",
  },
  {
    week: "Week 5–6",
    phase: "Dashboard & Integration",
    hours: "18–24 hrs",
    color: "cyan",
    tasks: [
      "Build Looker Studio dashboard connected to automated data",
      "Design KPI cards, charts, and interactive filters",
      "Implement scheduling (Cloud Scheduler / cron triggers)",
      "Build error handling, alerting, and notification system",
      "Create admin configuration interface for schedules and recipients",
    ],
    milestone: "✅ Dashboard live + automated scheduling operational",
  },
  {
    week: "Week 6–7",
    phase: "Testing & Validation",
    hours: "14–20 hrs",
    color: "amber",
    tasks: [
      "End-to-end testing with real data across multiple reporting cycles",
      "Validate AI output quality and consistency with stakeholders",
      "Load testing and error scenario testing",
      "User acceptance testing (UAT) with management team",
      "Fix issues and refine prompts based on feedback",
    ],
    milestone: "✅ UAT sign-off from stakeholders",
  },
  {
    week: "Week 7–8",
    phase: "Deployment, Training & Handoff",
    hours: "8–12 hrs",
    color: "green",
    tasks: [
      "Deploy to production environment",
      "Conduct knowledge transfer session with designated team members",
      "Deliver complete documentation package",
      "Monitor first live reporting cycle together",
      "Transition to post-launch support period",
    ],
    milestone: "✅ Project delivered — first live cycle completed",
  },
];

export default function Timeline() {
  const totalMin = phases.reduce((acc, p) => acc + parseInt(p.hours), 0);
  const totalMax = phases.reduce((acc, p) => {
    const parts = p.hours.split("–");
    return acc + parseInt(parts[1] || parts[0]);
  }, 0);

  return (
    <SectionWrapper
      id="timeline"
      number="07"
      title="Timeline"
      subtitle="Discovery, design, development, integration, testing, deployment, training/support."
    >
      {/* Summary bar */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 mb-10 text-white">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-medium text-blue-200">Total Project Duration</div>
            <div className="text-3xl font-bold">6–8 Weeks</div>
          </div>
          <div className="w-px h-10 bg-white/20 hidden sm:block" />
          <div>
            <div className="text-sm font-medium text-blue-200">Total Estimated Hours</div>
            <div className="text-3xl font-bold">{totalMin}–{totalMax} Hours</div>
          </div>
          <div className="w-px h-10 bg-white/20 hidden sm:block" />
          <div>
            <div className="text-sm font-medium text-blue-200">Proposed Start</div>
            <div className="text-3xl font-bold">Late Sep / Early Oct</div>
          </div>
        </div>
      </div>

      {/* Timeline items */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 hidden md:block" />

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div key={index} className="relative flex gap-6">
              {/* Timeline dot */}
              <div className="hidden md:flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full bg-${phase.color}-100 border-2 border-${phase.color}-400 flex items-center justify-center text-sm font-bold text-${phase.color}-700 z-10`}>
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      {phase.week}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">{phase.phase}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {phase.hours}
                  </span>
                </div>

                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {phase.tasks.map((task, ti) => (
                    <li key={ti} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>

                <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-sm text-green-800 font-medium">
                  {phase.milestone}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
