import Icon from "./Icon";
import SectionWrapper from "./SectionWrapper";

const deliverables = [
  {
    icon: "search" as const,
    title: "Environment Validation Report",
    included: [
      "Audit of current Google Sheets, Workspace, and Looker Studio setup",
      "Identification of all additional APIs, hosting, AI models, licenses, and services required",
      "AI model comparison scorecard: GPT-4o vs shortlisted alternatives (e.g. Claude Fable 5.1 / Sonnet 5 / Gemini)",
      "Third-party platform costs itemized separately from development fees",
      "Technical dependencies or external approvals that could affect timeline",
    ],
    phase: "Discovery",
  },
  {
    icon: "clipboard" as const,
    title: "Requirements & Data-Source Map",
    included: [
      "Complete inventory of all Google Sheets data sources",
      "Field-level mapping: source → KPI → report output",
      "Data freshness and update frequency documentation",
      "Stakeholder requirements matrix (who gets what, when)",
    ],
    phase: "Discovery",
  },
  {
    icon: "settings" as const,
    title: "Automated Reporting Workflow",
    included: [
      "Cloud Functions / Apps Script automation pipeline",
      "Scheduled data extraction from all mapped sources",
      "Data transformation and KPI calculation logic",
      "Configurable scheduling (daily, weekly, monthly, custom)",
    ],
    phase: "Development",
  },
  {
    icon: "file" as const,
    title: "Standardized Internal Report Output",
    included: [
      "Templated report format with consistent structure",
      "AI-generated executive summary and narrative insights",
      "KPI tables with period-over-period comparisons",
      "Automated chart/graph data preparation",
    ],
    phase: "Development",
  },
  {
    icon: "dashboard" as const,
    title: "Dashboard (Looker Studio)",
    included: [
      "Interactive Looker Studio dashboard connected to automated data",
      "KPI cards, trend charts, and comparison views",
      "Filter controls for date range, department, metrics",
      "Auto-refreshing data connection",
    ],
    phase: "Development",
  },
  {
    icon: "shield" as const,
    title: "Validation & Error-Handling Process",
    included: [
      "Input validation rules for all data sources",
      "Data quality scoring and anomaly detection",
      "Automated alerts for validation failures",
      "Exception logging with audit trail",
    ],
    phase: "Development",
  },
  {
    icon: "book" as const,
    title: "Technical Documentation & Handoff",
    included: [
      "Architecture documentation with data flow diagrams",
      "Runbook: how to operate, monitor, and troubleshoot",
      "Configuration guide for schedules, templates, recipients",
      "Knowledge transfer session (1–2 hours) with your team",
    ],
    phase: "Handoff",
  },
];

const discoveryDependent = [
  {
    item: "Source data restructuring or cleanup",
    reasoning:
      "If Google Sheets contain inconsistent formats, missing columns, or structural issues that prevent reliable automation, some level of restructuring may be necessary. I won't know until I audit the actual sheets during discovery.",
    ifNeeded:
      "Will be scoped with specific effort and cost during discovery — included in the revised project plan if required.",
  },
  {
    item: "Custom Looker Studio connectors",
    reasoning:
      "The standard Google Sheets data source may be sufficient, or it may not — depends on the complexity of KPIs, data blending needs, and dashboard requirements discovered during audit.",
    ifNeeded:
      "If standard connectors fall short, custom connector work will be scoped with specific hours and added to the project plan.",
  },
  {
    item: "Custom admin interface or web portal",
    reasoning:
      "A lightweight admin interface for managing schedules, recipients, and report parameters may be necessary. The extent depends on how much configuration flexibility TeamFicient needs — something I'll assess during stakeholder interviews.",
    ifNeeded:
      "If a simple config file or spreadsheet-based config is enough, no extra cost. If a proper UI is needed, it will be scoped and estimated separately.",
  },
  {
    item: "Additional data source integrations",
    reasoning:
      "The RFP lists Google Sheets as the primary data source, but during discovery we may find that some reporting data lives in other systems (CRM, project tools, etc.).",
    ifNeeded:
      "Each additional data source integration will be scoped individually with estimated hours and added to the project plan if approved by TeamFicient.",
  },
];

const genuineExclusions = [
  {
    item: "Ongoing manual report writing or content creation",
    why: "The entire objective is to automate reporting and eliminate manual preparation. Hiring me to manually write reports defeats the purpose of the project.",
  },
  {
    item: "Building entirely new business processes unrelated to reporting",
    why: "The project scope is internal reporting automation. Process changes outside this domain (e.g., changing how teams input data, restructuring departments) are a separate initiative.",
  },
  {
    item: "Training AI models or fine-tuning LLMs",
    why: "The proposed approach uses pre-trained LLMs via API (GPT-4o) with prompt engineering. Custom model training is a significantly larger effort and not necessary for this use case.",
  },
];

export default function ScopeAndDeliverables() {
  return (
    <SectionWrapper
      id="scope"
      number="06"
      title="Scope & Deliverables"
      subtitle="MVP/initial implementation, deliverables, and what gets defined during discovery."
      className="bg-white"
    >
      {/* Deliverables grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {deliverables.map((d, i) => (
          <div
            key={i}
            className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-200 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0"><Icon name={d.icon} size={18} className="text-white" /></span>
              <div>
                <h3 className="font-bold text-slate-900">{d.title}</h3>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                  {d.phase}
                </span>
              </div>
            </div>
            <ul className="space-y-2">
              {d.included.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="text-green-500 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Discovery-Dependent Scope */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-8">
        <h3 className="text-lg font-bold text-amber-900 mb-2 flex items-center gap-2">
          <Icon name="search" size={20} className="text-amber-700" /> Scope Items to Be Assessed During Discovery
        </h3>
        <p className="text-sm text-amber-800 mb-6">
          The following items cannot be definitively scoped in or out until I validate the current environment.
          Each will be assessed during the discovery phase, and if needed, scoped with specific effort and cost
          in the revised project plan — with TeamFicient&apos;s approval before any additional work begins.
        </p>
        <div className="space-y-5">
          {discoveryDependent.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-amber-200">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-800 text-xs flex items-center justify-center font-bold flex-shrink-0">
                  ?
                </span>
                {item.item}
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">Why it depends on discovery</div>
                  <p className="text-sm text-slate-600">{item.reasoning}</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase mb-1">If it&apos;s needed</div>
                  <p className="text-sm text-slate-600">{item.ifNeeded}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Genuine Exclusions */}
      <div className="bg-slate-100 border border-slate-300 rounded-2xl p-8">
        <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Icon name="xcircle" size={20} className="text-slate-600" /> Definitive Exclusions
        </h3>
        <p className="text-sm text-slate-500 mb-6">
          These items are genuinely outside the scope of this project regardless of discovery findings.
        </p>
        <div className="space-y-4">
          {genuineExclusions.map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-slate-200">
              <span className="text-red-400 mt-0.5 text-lg flex-shrink-0">✗</span>
              <div>
                <div className="font-medium text-slate-900 text-sm">{item.item}</div>
                <div className="text-xs text-slate-500 mt-1">
                  <strong>Why:</strong> {item.why}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
