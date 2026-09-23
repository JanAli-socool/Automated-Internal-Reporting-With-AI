import Icon from "./Icon";
import SectionWrapper from "./SectionWrapper";

const measures = [
  {
    icon: "key" as const,
    title: "Authentication & Access Control",
    points: [
      "Google service accounts with minimal required permissions (principle of least privilege)",
      "OAuth 2.0 for any user-facing authentication",
      "API keys stored in environment variables / Secret Manager, never hardcoded",
      "Role-based access for admin configuration interface",
    ],
  },
  {
    icon: "shield" as const,
    title: "Data Protection in Transit & at Rest",
    points: [
      "All API calls over HTTPS/TLS 1.2+",
      "Data processed in-memory within Google Cloud — no persistent storage of raw source data outside Google ecosystem",
      "AI API calls use enterprise-grade endpoints with data processing agreements (DPA)",
      "No employee, customer, or sensitive PII sent to AI models unless explicitly approved and anonymized",
    ],
  },
  {
    icon: "eye" as const,
    title: "AI Model Data Handling",
    points: [
      "Only aggregated/anonymized data sent to LLM for summarization (not raw employee or customer records)",
      "Use of enterprise API tiers (OpenAI Enterprise / Claude API) — data not used for model training",
      "Prompt templates reviewed and approved before production use",
      "Configurable data masking for sensitive fields before AI processing",
    ],
  },
  {
    icon: "file" as const,
    title: "Audit Trail & Retention",
    points: [
      "Complete logging of all pipeline executions with timestamps",
      "Record of data accessed, transformations applied, and outputs generated",
      "Report archive with version history and generation metadata",
      "Configurable data retention policies aligned with TeamFicient's requirements",
    ],
  },
  {
    icon: "lock" as const,
    title: "Data Separation & Auditability",
    points: [
      "All processing stays within TeamFicient's Google Cloud project / Workspace domain",
      "No co-mingling of data with other clients or projects",
      "Clear data flow documentation showing exactly where data goes at each step",
      "Regular access reviews recommended as part of ongoing maintenance",
    ],
  },
];

export default function SecurityAndPrivacy() {
  return (
    <SectionWrapper
      id="security"
      number="09"
      title="Security, Privacy & Data Protection"
      subtitle="How project data will be protected, who can access it, and how access is controlled."
    >
      <div className="space-y-6">
        {measures.map((m, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm"><Icon name={m.icon} size={18} className="text-white" /></span>
              {m.title}
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {m.points.map((point, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-slate-900 rounded-2xl p-8 text-white">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0"><Icon name={"warning"} size={18} className="text-white" /></span> Key Commitment
        </h3>
        <p className="text-slate-300 leading-relaxed">
          I commit to treating all TeamFicient data with the highest level of confidentiality. 
          No data will be shared, exported, or stored outside approved systems. I am open to 
          signing an NDA and any required data handling agreements before project commencement. 
          All credentials and access will be revoked/transferred to TeamFicient upon project completion.
        </p>
      </div>
    </SectionWrapper>
  );
}
