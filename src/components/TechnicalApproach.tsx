import SectionWrapper from "./SectionWrapper";

const phases = [
  {
    icon: "🔍",
    title: "Data Collection Layer",
    description: "How data is sourced and ingested",
    details: [
      "Connect to Google Sheets via Google Sheets API (v4) using service account authentication",
      "Map all internal data sources and their update frequencies during discovery",
      "Build configurable data extractors that pull from multiple sheets/tabs/ranges",
      "Implement scheduled triggers via Google Cloud Scheduler for automated pulls",
      "Support both pull-based (scheduled) and event-driven (on sheet change) triggers",
    ],
  },
  {
    icon: "✅",
    title: "Validation & Transformation",
    description: "Ensuring data quality before processing",
    details: [
      "Apply schema validation rules to every data pull (type checks, range checks, nullability)",
      "Flag incomplete or anomalous data points with automatic exception alerts",
      "Normalize data formats across different source sheets for consistent processing",
      "Create a data quality scorecard that accompanies each report generation",
      "Log all validation failures with timestamps for audit trail",
    ],
  },
  {
    icon: "🤖",
    title: "AI Summarization Engine (Vendor-Proposed LLM)",
    description: "Generating intelligent management insights using the proposed AI/LLM service",
    details: [
      "Feed validated, structured data to the recommended production LLM (GPT-4o — see Section 03) via API",
      "Run side-by-side benchmark tests against shortlisted alternatives such as Claude Fable 5.1 / Sonnet 5 and Gemini during discovery/pilot if approved",
      "Generate consistent narrative summaries: trends, highlights, anomalies, recommendations",
      "Use engineered prompt templates that enforce consistent KPI terminology and calculations",
      "Implement few-shot examples from historical reports to maintain style and tone consistency",
      "Support configurable summary depth (executive brief vs. detailed analysis)",
      "Modular model-adapter design allows swapping the LLM provider without rebuilding the pipeline",
    ],
  },
  {
    icon: "📊",
    title: "Report Generation & Delivery",
    description: "Formatting and distributing via existing tools",
    details: [
      "Auto-populate standardized report templates with computed KPIs and AI narratives",
      "Push structured data to Looker Studio (already in TeamFicient's stack) for dashboard visualization",
      "Generate Google Docs / PDF reports for email distribution via Google Workspace",
      "Schedule automated delivery (daily/weekly/monthly) based on reporting requirements",
      "Maintain a report archive with version history in Google Drive",
    ],
  },
  {
    icon: "⚙️",
    title: "Monitoring & Error Handling",
    description: "Keeping the system reliable",
    details: [
      "Centralized logging via Google Cloud Logging for every pipeline run",
      "Automatic retry logic for transient failures (API timeouts, rate limits)",
      "Email notifications on pipeline failures or data quality issues",
      "Admin configuration for schedules, recipients, and report parameters",
      "Dead letter queue for failed operations with manual retry capability",
    ],
  },
];

export default function TechnicalApproach() {
  return (
    <SectionWrapper
      id="technical-approach"
      number="04"
      title="Technical Approach"
      subtitle="Architecture, technology stack, integrations, AI components, and workflows."
      className="bg-white"
    >
      <div className="space-y-8">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="relative bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all"
          >
            {/* Connector line */}
            {index < phases.length - 1 && (
              <div className="hidden lg:block absolute left-1/2 -bottom-8 w-0.5 h-8 bg-gradient-to-b from-blue-300 to-transparent" />
            )}

            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex items-center gap-4 lg:w-72 flex-shrink-0">
                <span className="text-4xl">{phase.icon}</span>
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    Layer {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{phase.title}</h3>
                  <p className="text-sm text-slate-500 mt-0.5">{phase.description}</p>
                </div>
              </div>
              <div className="flex-1">
                <ul className="grid sm:grid-cols-2 gap-3">
                  {phase.details.map((detail, di) => (
                    <li key={di} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Workflow summary */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
        <h3 className="text-xl font-bold mb-4">🔄 End-to-End Workflow</h3>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          {[
            "Google Sheets",
            "→",
            "Sheets API v4",
            "→",
            "Validation Engine",
            "→",
            "GPT-4o API",
            "→",
            "Report Template",
            "→",
            "Looker Studio + Email",
          ].map((step, i) => (
            <span
              key={i}
              className={
                step === "→"
                  ? "text-blue-300 text-lg"
                  : "bg-white/15 backdrop-blur-sm rounded-lg px-4 py-2 font-medium"
              }
            >
              {step}
            </span>
          ))}
        </div>
        <p className="text-blue-200 text-sm mt-4">
          <strong>Note:</strong> All existing tools (Google Sheets, Workspace, Looker Studio) remain in place. The
          automation layer and AI/LLM service (vendor-proposed) are added alongside — no disruption to current workflows.
        </p>
      </div>
    </SectionWrapper>
  );
}
