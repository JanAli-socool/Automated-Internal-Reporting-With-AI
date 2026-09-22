import SectionWrapper from "./SectionWrapper";

export default function ArchitectureDiagram() {
  return (
    <SectionWrapper
      id="architecture"
      number="05"
      title="System Architecture"
      subtitle="Technical architecture showing systems, data flows, integrations, automation points, and user/admin touchpoints."
    >
      {/* Architecture diagram built with CSS */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Row 1: Data Sources (Existing) */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest w-24">
              Sources
              <span className="block text-[10px] text-green-500 font-normal">(Existing)</span>
            </span>
            <div className="flex gap-4 flex-1 justify-center">
              {[
                { icon: "📗", label: "Google Sheets\n(Financial Data)" },
                { icon: "📘", label: "Google Sheets\n(Operations Data)" },
                { icon: "📙", label: "Google Sheets\n(HR / Team Data)" },
                { icon: "📂", label: "Google Drive\n(Documents)" },
              ].map((s, i) => (
                <div key={i} className="bg-green-50 border border-green-200 rounded-xl p-4 text-center w-40">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-xs font-medium text-slate-700 whitespace-pre-line">{s.label}</div>
                  <div className="text-[9px] text-green-600 mt-1 font-medium">EXISTING</div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center my-3">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-blue-400" />
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-blue-400" />
              <span className="text-[10px] text-blue-500 font-medium mt-1">Google Sheets API v4 (to be enabled)</span>
            </div>
          </div>

          {/* Row 2: Automation Layer (New) */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest w-24">
              Automation
              <span className="block text-[10px] text-blue-500 font-normal">(New — built by vendor)</span>
            </span>
            <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6 flex-1 max-w-3xl">
              <div className="text-center text-xs font-bold text-blue-700 uppercase tracking-wider mb-4">
                ⚡ Orchestration Engine (Google Cloud Functions + Cloud Scheduler)
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-3 border border-blue-200 text-center">
                  <div className="text-lg mb-1">📥</div>
                  <div className="text-xs font-semibold text-slate-700">Data Collector</div>
                  <div className="text-[10px] text-slate-400 mt-1">Scheduled pulls via Cloud Scheduler</div>
                </div>
                <div className="bg-white rounded-xl p-3 border border-blue-200 text-center">
                  <div className="text-lg mb-1">🔍</div>
                  <div className="text-xs font-semibold text-slate-700">Validator</div>
                  <div className="text-[10px] text-slate-400 mt-1">Schema + Data Quality Scoring</div>
                </div>
                <div className="bg-white rounded-xl p-3 border border-blue-200 text-center">
                  <div className="text-lg mb-1">🔄</div>
                  <div className="text-xs font-semibold text-slate-700">Transformer</div>
                  <div className="text-[10px] text-slate-400 mt-1">Normalize + Calculate KPIs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center my-3">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-purple-400" />
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-purple-400" />
              <span className="text-[10px] text-purple-500 font-medium mt-1">Structured Data + Engineered Prompt</span>
            </div>
          </div>

          {/* Row 3: AI Layer (Vendor-Proposed) */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest w-24">
              AI Engine
              <span className="block text-[10px] text-purple-500 font-normal">(Vendor-proposed)</span>
            </span>
            <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-6 flex-1 max-w-3xl">
              <div className="text-center text-xs font-bold text-purple-700 uppercase tracking-wider mb-4">
                🤖 Vendor-Proposed AI/LLM: OpenAI GPT-4o (see Section 03)
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-purple-200">
                  <div className="text-lg mb-1">🤖</div>
                  <div className="text-sm font-semibold text-slate-700">LLM Summarization</div>
                  <div className="text-xs text-slate-400 mt-1">OpenAI GPT-4o API</div>
                  <div className="text-[10px] text-slate-500 mt-2">
                    Engineered prompts → Narrative summaries, trend analysis, anomaly detection, recommendations
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-purple-200">
                  <div className="text-lg mb-1">📋</div>
                  <div className="text-sm font-semibold text-slate-700">Template Engine</div>
                  <div className="text-xs text-slate-400 mt-1">Report Formatting</div>
                  <div className="text-[10px] text-slate-500 mt-2">
                    Standardized output: KPI tables, charts data, AI narrative — combined into final report
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center my-3">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-amber-400" />
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-amber-400" />
              <span className="text-[10px] text-amber-600 font-medium mt-1">Formatted Report + Structured Data</span>
            </div>
          </div>

          {/* Row 4: Output Layer (Mix of existing + new) */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest w-24">
              Delivery
              <span className="block text-[10px] text-amber-500 font-normal">(Existing tools)</span>
            </span>
            <div className="flex gap-4 flex-1 justify-center">
              {[
                { icon: "📊", label: "Looker Studio\nDashboard", tag: "EXISTING" },
                { icon: "📧", label: "Google Workspace\nEmail Distribution", tag: "EXISTING" },
                { icon: "📄", label: "Google Docs\nReport Archive", tag: "EXISTING" },
                { icon: "🔔", label: "Alert\nNotifications", tag: "NEW" },
              ].map((s, i) => (
                <div key={i} className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center w-40">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-xs font-medium text-slate-700 whitespace-pre-line">{s.label}</div>
                  <div className={`text-[9px] mt-1 font-medium ${s.tag === "EXISTING" ? "text-green-600" : "text-blue-600"}`}>
                    {s.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cross-cutting concerns */}
          <div className="mt-8 bg-slate-100 rounded-2xl p-6 border border-slate-300">
            <div className="text-center text-xs font-bold text-slate-600 uppercase tracking-wider mb-4">
              🛡️ Cross-Cutting Concerns (Built by Vendor)
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[
                { icon: "🔐", label: "Auth & Permissions", desc: "Service accounts, OAuth, least-privilege" },
                { icon: "📝", label: "Logging & Audit", desc: "Cloud Logging, run history, data lineage" },
                { icon: "⚠️", label: "Error Handling", desc: "Retry logic, alerts, dead letter queue" },
                { icon: "👤", label: "Admin Interface", desc: "Config schedules, recipients, parameters" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-3 text-center border border-slate-200">
                  <div className="text-lg">{item.icon}</div>
                  <div className="text-xs font-semibold text-slate-700 mt-1">{item.label}</div>
                  <div className="text-[10px] text-slate-400">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-6 justify-center text-xs">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-green-200 border border-green-400" />
          <span className="text-slate-600">Existing (TeamFicient)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-blue-200 border border-blue-400" />
          <span className="text-slate-600">New — Built by Vendor</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-purple-200 border border-purple-400" />
          <span className="text-slate-600">Vendor-Proposed AI/LLM Service</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
