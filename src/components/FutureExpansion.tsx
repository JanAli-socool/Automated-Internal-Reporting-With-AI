import Icon from "./Icon";
import SectionWrapper from "./SectionWrapper";

const expansions = [
  {
    icon: "trending" as const,
    title: "Advanced Analytics & Predictions",
    description:
      "Extend the AI layer to include predictive analytics — forecasting KPIs, identifying trends before they materialize, and providing prescriptive recommendations for management action.",
    effort: "Medium",
    value: "High",
  },
  {
    icon: "message" as const,
    title: "Natural Language Query Interface",
    description:
      "Build a conversational interface (Slack bot or web chat) where managers can ask questions about their data in plain English and get instant AI-powered answers from the reporting dataset.",
    effort: "Medium",
    value: "High",
  },
  {
    icon: "link" as const,
    title: "Multi-Source Data Integration",
    description:
      "Extend data collection beyond Google Sheets to include CRM systems, project management tools (Asana, Monday.com), financial platforms, or HR systems via their APIs.",
    effort: "High",
    value: "High",
  },
  {
    icon: "users" as const,
    title: "Client-Facing Reporting",
    description:
      "Adapt the internal reporting system for client-facing use — white-labeled reports and dashboards that can be shared with TeamFicient's clients as a value-added service.",
    effort: "Medium",
    value: "Very High",
  },
  {
    icon: "smartphone" as const,
    title: "Mobile Report Delivery",
    description:
      "Push report summaries to mobile via SMS, WhatsApp, or a lightweight PWA so management gets key metrics on the go.",
    effort: "Low",
    value: "Medium",
  },
  {
    icon: "refresh" as const,
    title: "Real-Time Dashboard Updates",
    description:
      "Move from scheduled reporting to near-real-time data streaming, with live-updating dashboards and instant anomaly alerts.",
    effort: "High",
    value: "Medium",
  },
];

export default function FutureExpansion() {
  return (
    <SectionWrapper
      id="future"
      number="11"
      title="Future Expansion"
      subtitle="How the solution can be enhanced, scaled, or reused — potential for client-facing commercialization."
      className="bg-white"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {expansions.map((exp, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center mb-3 shadow-md"><Icon name={exp.icon} size={20} className="text-white" /></div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
              {exp.title}
            </h3>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">{exp.description}</p>
            <div className="flex gap-3">
              <span className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                Effort: {exp.effort}
              </span>
              <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                Value: {exp.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-2xl p-8 text-white">
        <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><Icon name="telescope" size={20} className="text-indigo-200" /> Scalability by Design</h3>
        <p className="text-indigo-100 leading-relaxed">
          The proposed architecture is intentionally modular and extensible. Each component (data collection, 
          validation, AI processing, delivery) is a separate, independently upgradeable layer. This means 
          TeamFicient can start with the core automated reporting and progressively add capabilities — 
          new data sources, new report types, new delivery channels, or advanced AI features — without 
          rebuilding the foundation. The same infrastructure can be reused for client-facing reporting, 
          making this investment a platform, not just a project.
        </p>
      </div>
    </SectionWrapper>
  );
}
