import SectionWrapper from "./SectionWrapper";

export default function ExecutiveSummary() {
  return (
    <SectionWrapper
      id="executive-summary"
      number="01"
      title="Executive Summary"
      subtitle="Proposed solution, expected business value, and recommended approach."
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main summary */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🎯</span> Proposed Solution
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              I propose building an <strong>end-to-end AI-powered internal reporting automation system</strong> that
              integrates with TeamFicient&apos;s existing environment — Google Sheets, Google Workspace / Workspace Studio,
              and Looker Studio — to automatically collect, validate, and transform internal data into
              standardized management reports with consistent KPIs, delivered on a recurring schedule without
              any manual report preparation.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The AI/LLM component — which I propose and evaluate in detail in{" "}
              <a href="#ai-recommendation" className="text-blue-600 font-semibold hover:underline">Section 03</a>{" "}
              — will generate narrative summaries, trend analysis, and management insights from the structured data.
              My recommendation is to <strong>deploy the production workflow on OpenAI GPT-4o</strong>, while also
              benchmarking it against alternatives such as <strong>Claude Fable 5.1</strong>, <strong>Claude Sonnet 5</strong>,
              and <strong>Gemini 3.8 Flash</strong> during discovery/pilot so TeamFicient has a documented basis for the final choice.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Critically, the first phase of this engagement is a <strong>discovery and validation sprint</strong> where
              I will audit TeamFicient&apos;s current technical environment, confirm what software and access is already in place,
              and identify any additional APIs, hosting, licenses, integrations, or services required. All third-party
              platform costs are{" "}
              <a href="#cost" className="text-blue-600 font-semibold hover:underline">itemized separately</a>{" "}
              from development costs as required.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This approach eliminates hours of manual data compilation, ensures every report uses the same
              KPI definitions and formatting, and gives management AI-generated narrative context alongside
              the numbers — dramatically reducing time-to-report while improving quality and consistency.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">💡</span> Recommended Approach
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Rather than building a heavy custom application, I recommend a <strong>composable
              automation architecture</strong> that maximizes TeamFicient&apos;s existing tools while introducing
              targeted AI capabilities. The approach is discovery-first:
            </p>
            <ul className="space-y-3">
              {[
                "Validate current environment first — confirm Google Sheets structure, Workspace setup, Looker Studio configuration, and permissions before writing code",
                "Google Sheets API (v4) + Apps Script for automated data collection from existing spreadsheets",
                "AI/LLM service (proposed: OpenAI GPT-4o — see Section 03 for evaluation) for generating management summaries and insights",
                "Looker Studio for interactive dashboard delivery — already in TeamFicient's stack",
                "Google Cloud Functions + Cloud Scheduler for pipeline orchestration and recurring execution",
                "Identify all third-party platforms during discovery — separate from development costs with transparent pricing",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Side highlights */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-4">📊 Expected Business Value</h4>
            <div className="space-y-4">
              {[
                { metric: "Time Saved", value: "80–90%", desc: "reduction in report prep time" },
                { metric: "Consistency", value: "100%", desc: "standardized KPI calculations" },
                { metric: "Frequency", value: "Automated", desc: "recurring delivery on schedule" },
                { metric: "Insights", value: "AI-Driven", desc: "narrative summaries per cycle" },
              ].map((item, i) => (
                <div key={i} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                  <div className="text-sm text-slate-500">{item.metric}</div>
                  <div className="text-lg font-bold text-blue-700">{item.value}</div>
                  <div className="text-xs text-slate-400">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 text-white">
            <h4 className="font-bold mb-3">🛠 Technology Stack</h4>
            <div className="space-y-1 text-sm">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Existing (TeamFicient)
              </div>
              {[
                "Google Sheets",
                "Google Workspace / Workspace Studio",
                "Looker Studio",
              ].map((tech, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-slate-300">{tech}</span>
                </div>
              ))}
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2">
                Proposed by Vendor (Me)
              </div>
              {[
                "OpenAI GPT-4o API (AI/LLM)",
                "Google Cloud Functions",
                "Google Cloud Scheduler",
                "Google Sheets API v4",
                "Python / Node.js",
              ].map((tech, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="text-slate-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <h4 className="font-bold text-amber-900 mb-2 text-sm">⚡ Discovery-First Promise</h4>
            <p className="text-xs text-amber-800 leading-relaxed">
              I will validate the current environment during discovery and provide a
              complete inventory of all additional software, APIs, hosting, AI models,
              licenses, integrations, and services required — with costs identified
              separately from my development fees.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
