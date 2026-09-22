import SectionWrapper from "./SectionWrapper";

const risks = [
  {
    severity: "Medium",
    risk: "Data source inconsistency",
    description:
      "Google Sheets may have varying formats, missing data, or inconsistent naming conventions across different departments.",
    mitigation:
      "Discovery phase will catalog all variations. Validation engine will handle known variations and flag unknown ones. Data quality scorecard will surface issues proactively.",
  },
  {
    severity: "Medium",
    risk: "AI output quality variability",
    description:
      "LLM-generated summaries may occasionally produce inaccurate interpretations, especially with unusual data patterns.",
    mitigation:
      "Implement human review workflow for first 2–4 weeks. Use structured prompts with explicit instructions. Build a feedback loop for prompt refinement. Include confidence indicators in outputs.",
  },
  {
    severity: "Low",
    risk: "API rate limits and costs",
    description:
      "OpenAI/Claude API costs could exceed estimates if report volume or complexity increases significantly.",
    mitigation:
      "Implement token usage monitoring and alerting. Use efficient prompting strategies. Set budget caps with automated cutoffs. Cache repeated analysis patterns.",
  },
  {
    severity: "Low",
    risk: "Google API changes or deprecations",
    description:
      "Google may update Sheets API, Apps Script, or Looker Studio APIs, requiring code updates.",
    mitigation:
      "Use stable API versions. Monitor Google deprecation announcements. Modular architecture makes updates isolated to affected components.",
  },
  {
    severity: "Medium",
    risk: "Scope creep during development",
    description:
      "Additional data sources, report types, or features may be requested during development, expanding the original scope.",
    mitigation:
      "Clear scope document signed before development. Change requests handled through formal process with impact assessment on timeline and cost.",
  },
  {
    severity: "Low",
    risk: "Deployment environment access",
    description:
      "Delays in obtaining required API credentials, Google Cloud access, or Looker Studio permissions.",
    mitigation:
      "Provide detailed access requirements checklist in Week 1. Request all credentials upfront during discovery. Have fallback development environment ready.",
  },
];

const assumptions = [
  "TeamFicient will provide timely access to all required Google Sheets, Google Workspace, and Looker Studio environments",
  "A designated point of contact will be available for questions, reviews, and approvals with reasonable response times (within 1–2 business days)",
  "Existing Google Sheets contain the source data needed for the required reports (no new data collection systems need to be built)",
  "TeamFicient has an active Google Cloud account (or is willing to set one up) for hosting Cloud Functions and scheduling",
  "Current KPI definitions and reporting requirements can be documented and agreed upon during the Discovery phase",
  "TeamFicient will handle procurement and billing for third-party API services (OpenAI/Claude) — I will set up the integration",
  "The project will follow a phased approach with milestone-based approvals — each phase builds on the approved output of the previous one",
  "Feedback cycles will be limited to 1–2 rounds per deliverable to maintain the proposed timeline",
];

const clientNeeds = [
  {
    icon: "🔑",
    title: "Access & Credentials",
    items: [
      "Read access to all Google Sheets data sources used in reporting",
      "Google Cloud project with billing enabled (or willingness to create one)",
      "Looker Studio access with editor permissions",
      "Approval to create service accounts and API credentials",
    ],
  },
  {
    icon: "👤",
    title: "People & Communication",
    items: [
      "Designated project point of contact for day-to-day questions",
      "Access to 1–2 stakeholders who currently consume/create the reports",
      "Weekly 30-min check-in call for progress updates",
      "Timely feedback on deliverables (within 1–2 business days)",
    ],
  },
  {
    icon: "📖",
    title: "Information & Context",
    items: [
      "Existing report samples/templates currently used by management",
      "KPI definitions and business logic for calculations",
      "Desired reporting frequency and distribution list",
      "Any compliance or data handling requirements",
    ],
  },
];

function SeverityBadge({ severity }: { severity: string }) {
  const colors =
    severity === "High"
      ? "bg-red-100 text-red-700 border-red-200"
      : severity === "Medium"
      ? "bg-amber-100 text-amber-700 border-amber-200"
      : "bg-green-100 text-green-700 border-green-200";

  return (
    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${colors}`}>
      {severity}
    </span>
  );
}

export default function RisksAndAssumptions() {
  return (
    <SectionWrapper
      id="risks"
      number="10"
      title="Risks, Limitations & Assumptions"
      subtitle="Dependencies, limitations, risks, and required TeamFicient inputs."
      className="bg-white"
    >
      {/* What we need from client */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <span className="text-2xl">🤝</span> What I Need from TeamFicient (Client Requirements)
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {clientNeeds.map((need, i) => (
            <div key={i} className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="text-3xl mb-3">{need.icon}</div>
              <h4 className="font-bold text-slate-900 mb-3">{need.title}</h4>
              <ul className="space-y-2">
                {need.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-blue-500 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Risks */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <span className="text-2xl">⚠️</span> Risk Register
        </h3>
        <div className="space-y-4">
          {risks.map((r, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                <SeverityBadge severity={r.severity} />
                <h4 className="font-bold text-slate-900">{r.risk}</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">Risk Description</div>
                  <p className="text-sm text-slate-600">{r.description}</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-green-600 uppercase mb-1">Mitigation Strategy</div>
                  <p className="text-sm text-slate-600">{r.mitigation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assumptions */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <span className="text-2xl">📌</span> Key Assumptions
        </h3>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <ul className="space-y-3">
            {assumptions.map((a, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-amber-200 text-amber-800 text-xs flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
