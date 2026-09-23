import Icon from "./Icon";
import SectionWrapper from "./SectionWrapper";

const currentStack = [
  {
    tool: "Google Sheets",
    icon: "sheet" as const,
    status: "In Use",
    whatIllValidate: [
      "Number and structure of sheets used for reporting data",
      "Data freshness — how often each sheet is updated and by whom",
      "Naming conventions, column structures, and data types across sheets",
      "Permissions model — who has read/write access",
      "Any existing formulas, macros, or Apps Script attached to sheets",
    ],
  },
  {
    tool: "Google Workspace / Workspace Studio",
    icon: "mail" as const,
    status: "In Use",
    whatIllValidate: [
      "Workspace edition (Business Starter/Standard/Plus/Enterprise) — affects API quotas and features",
      "Admin console access and ability to create service accounts",
      "Google Drive structure and document organization",
      "Email distribution capabilities for automated report delivery",
      "Any existing automations or workflows already in place",
    ],
  },
  {
    tool: "Looker Studio",
    icon: "dashboard" as const,
    status: "In Use",
    whatIllValidate: [
      "Existing dashboards and reports — what's already built",
      "Current data sources connected to Looker Studio",
      "Free tier vs. Looker Studio Pro — which is in use",
      "User access levels and sharing configuration",
      "Any custom calculated fields or blended data sources",
    ],
  },
  {
    tool: "AI/LLM Service",
    icon: "bot" as const,
    status: "To Be Proposed",
    whatIllValidate: [
      "No existing AI/LLM — this is proposed by me as the vendor (see Section 03)",
      "Evaluate suitability of GPT-4o as production default, plus Claude Fable 5.1 / Sonnet 5 and Gemini as comparison candidates",
      "Assess data sensitivity to determine which AI provider best meets privacy requirements",
      "Estimate token usage and costs based on actual report volume and complexity",
      "Determine if TeamFicient has existing API accounts, provider preferences, or procurement constraints",
    ],
  },
];

const additionalIdentification = [
  {
    category: "APIs & Credentials",
    icon: "key" as const,
    items: [
      "Google Sheets API v4 — needs to be enabled in Google Cloud Console",
      "Google Drive API — for document management and archival",
      "AI/LLM API key — OpenAI, Anthropic, or Google AI (to be procured by TeamFicient)",
      "OAuth 2.0 service account — for server-to-server authentication",
    ],
  },
  {
    category: "Hosting & Infrastructure",
    icon: "cloud" as const,
    items: [
      "Google Cloud Platform project — may need to be created if not existing",
      "Cloud Functions (serverless compute) — for pipeline execution",
      "Cloud Scheduler — for cron-based automation triggers",
      "Cloud Logging — for centralized pipeline monitoring",
    ],
  },
  {
    category: "Licenses & Services",
    icon: "file" as const,
    items: [
      "OpenAI API subscription (pay-per-use, no license fee)",
      "Google Cloud billing account (pay-per-use)",
      "Looker Studio Pro — optional, only if advanced governance features needed",
      "No additional third-party software licenses anticipated",
    ],
  },
  {
    category: "Integrations",
    icon: "link" as const,
    items: [
      "Google Sheets → Cloud Functions (data extraction trigger)",
      "Cloud Functions → AI/LLM API (summarization calls)",
      "Cloud Functions → Looker Studio data source (dashboard refresh)",
      "Cloud Functions → Gmail/email (report distribution)",
    ],
  },
];

export default function EnvironmentValidation() {
  return (
    <SectionWrapper
      id="environment"
      number="02"
      title="Current Environment Validation"
      subtitle="How I will audit TeamFicient's existing technical environment during discovery, and identify all additional software, APIs, hosting, and services required."
    >
      {/* Current stack audit plan */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <span className="w-9 h-9 rounded-xl bg-blue-600 inline-flex items-center justify-center flex-shrink-0"><Icon name={"search"} size={16} className="text-white" /></span> Current Stack — What I Will Validate During Discovery
        </h3>
        <p className="text-sm text-slate-500 mb-6">
          Per the RFP: &quot;The vendor must validate the current environment during discovery and identify any
          additional software, APIs, hosting, AI models, licenses, integrations, or services required.&quot;
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {currentStack.map((tool, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 border ${
                tool.status === "To Be Proposed"
                  ? "bg-purple-50 border-purple-200"
                  : "bg-white border-slate-200"
              } shadow-sm`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0"><Icon name={tool.icon} size={18} className="text-white" /></span>
                <div>
                  <h4 className="font-bold text-slate-900">{tool.tool}</h4>
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      tool.status === "To Be Proposed"
                        ? "bg-purple-200 text-purple-800"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {tool.status}
                  </span>
                </div>
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                What I will validate:
              </div>
              <ul className="space-y-2">
                {tool.whatIllValidate.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Additional requirements identification */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <span className="w-9 h-9 rounded-xl bg-blue-600 inline-flex items-center justify-center flex-shrink-0"><Icon name={"clipboard"} size={16} className="text-white" /></span> Additional Requirements to Identify
        </h3>
        <p className="text-sm text-slate-500 mb-6">
          All proposed third-party platforms will be identified separately from development costs
          with transparent pricing in the{" "}
          <a href="#cost" className="text-blue-600 font-semibold hover:underline">Cost Breakdown</a>.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {additionalIdentification.map((cat, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0"><Icon name={cat.icon} size={16} className="text-white" /></span>
                <h4 className="font-bold text-slate-900">{cat.category}</h4>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-slate-400 mt-0.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Discovery deliverable */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Icon name="scroll" size={20} className="text-blue-200" /> Discovery Phase Deliverable: Environment Validation Report</h3>
        <p className="text-blue-100 mb-4">
          At the end of Week 1 (Discovery), I will deliver a formal <strong>Environment Validation Report</strong> that includes:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Complete inventory of current Google Sheets data sources with structure documentation",
            "Google Workspace configuration assessment and API readiness status",
            "Looker Studio current state and integration capability analysis",
            "AI/LLM service recommendation with pricing justification",
            "List of all required APIs, credentials, and access permissions",
            "All third-party platform costs itemized separately from development fees",
            "Technical dependencies or external approvals that could affect timeline",
            "Revised project plan if any significant gaps are discovered",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <span className="text-cyan-300 mt-0.5 flex-shrink-0">✓</span>
              <span className="text-blue-50">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
