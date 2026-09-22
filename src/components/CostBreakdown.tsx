import SectionWrapper from "./SectionWrapper";

const developmentCosts = [
  {
    phase: "Discovery & Environment Validation",
    hours: "14–16",
    rate: "$40",
    cost: "$560–$640",
    desc: "Audit current environment, validate Google Sheets/Workspace/Looker Studio, map data sources, document requirements",
  },
  {
    phase: "Core Development (Pipeline & Validation)",
    hours: "28–36",
    rate: "$40",
    cost: "$1,120–$1,440",
    desc: "Data extraction via Sheets API, validation engine, KPI calculations, Cloud Functions infrastructure",
  },
  {
    phase: "AI/LLM Integration & Report Generation",
    hours: "24–32",
    rate: "$40",
    cost: "$960–$1,280",
    desc: "GPT-4o API integration, prompt engineering, report templating, distribution logic",
  },
  {
    phase: "Dashboard & Integration",
    hours: "18–24",
    rate: "$40",
    cost: "$720–$960",
    desc: "Looker Studio dashboard setup, Cloud Scheduler automation, error handling, admin config",
  },
  {
    phase: "Testing & Validation",
    hours: "14–20",
    rate: "$40",
    cost: "$560–$800",
    desc: "End-to-end testing, UAT with stakeholders, AI output quality validation, prompt refinement",
  },
  {
    phase: "Deployment, Training & Handoff",
    hours: "8–12",
    rate: "$40",
    cost: "$320–$480",
    desc: "Production deployment, documentation package, knowledge transfer session",
  },
];

const thirdPartyPlatforms = [
  {
    platform: "OpenAI API (GPT-4o)",
    type: "AI/LLM Service",
    oneTimeCost: "None",
    category: "Vendor-Proposed",
    notes:
      "Pay-per-use API. No license fee or setup cost. TeamFicient procures API key. This is the vendor-proposed AI/LLM service (see Section 03 for evaluation).",
  },
  {
    platform: "Google Cloud Platform (GCP)",
    type: "Hosting & Compute",
    oneTimeCost: "None",
    category: "May Need Setup",
    notes:
      "If TeamFicient doesn't have an existing GCP project, one needs to be created (free). Billing account required for Cloud Functions and Cloud Scheduler.",
  },
  {
    platform: "Google Cloud Functions",
    type: "Serverless Compute",
    oneTimeCost: "None",
    category: "New Service",
    notes:
      "Serverless execution environment for automation pipelines. Part of GCP — no separate license. Pay-per-invocation.",
  },
  {
    platform: "Google Cloud Scheduler",
    type: "Cron Scheduling",
    oneTimeCost: "None",
    category: "New Service",
    notes:
      "Cron job service for triggering automated pipelines. Part of GCP — 3 free jobs/month, then $0.10/job/month.",
  },
  {
    platform: "Google Sheets API v4",
    type: "Data Access API",
    oneTimeCost: "None",
    category: "Existing (Enable)",
    notes:
      "Included with Google Workspace. Needs to be enabled in Google Cloud Console. No additional cost.",
  },
  {
    platform: "Looker Studio",
    type: "Dashboard/Reporting",
    oneTimeCost: "None",
    category: "Existing",
    notes:
      "Already in TeamFicient's stack. Free tier sufficient. Looker Studio Pro ($9/user/mo) optional for governance features.",
  },
  {
    platform: "Google Workspace",
    type: "Email & Collaboration",
    oneTimeCost: "None",
    category: "Existing",
    notes:
      "Already in TeamFicient's stack. No additional cost. Used for email delivery and Google Docs report archival.",
  },
  {
    platform: "Anthropic API (optional benchmark only)",
    type: "Model Comparison",
    oneTimeCost: "None",
    category: "Optional",
    notes:
      "Only needed if TeamFicient wants a live side-by-side comparison against Claude Fable 5.1 or Claude Sonnet 5 during discovery/pilot. Not required for GPT-4o production build.",
  },
  {
    platform: "Google Vertex AI / Gemini (optional benchmark only)",
    type: "Model Comparison",
    oneTimeCost: "None",
    category: "Optional",
    notes:
      "Only needed if TeamFicient wants a live comparison against Gemini during discovery/pilot. Not required for GPT-4o production build.",
  },
];

const recurringCosts = [
  {
    item: "OpenAI API (GPT-4o)",
    estimate: "$20–$80/month",
    notes:
      "Based on estimated report volume. ~$2.50/1M input tokens + ~$10/1M output tokens. Scales linearly with number of reports and complexity.",
    required: true,
    paidBy: "TeamFicient",
  },
  {
    item: "Google Cloud Functions",
    estimate: "$5–$20/month",
    notes:
      "Compute costs for pipeline execution. First 2M invocations/month free. Minimal at TeamFicient's projected scale.",
    required: true,
    paidBy: "TeamFicient",
  },
  {
    item: "Google Cloud Scheduler",
    estimate: "$0–$5/month",
    notes:
      "3 free cron jobs/month. Additional jobs $0.10/month each. Minimal cost.",
    required: true,
    paidBy: "TeamFicient",
  },
  {
    item: "Google Cloud Logging",
    estimate: "$0–$5/month",
    notes:
      "First 50 GB/month free. Pipeline logs are lightweight — should stay within free tier.",
    required: true,
    paidBy: "TeamFicient",
  },
  {
    item: "Looker Studio Pro (Optional)",
    estimate: "$0 or $9/user/month",
    notes:
      "Free tier is sufficient. Pro adds scheduled delivery, team workspace, and governance — evaluate during discovery.",
    required: false,
    paidBy: "TeamFicient",
  },
  {
    item: "Anthropic benchmark usage (Optional)",
    estimate: "Usually small / capped during discovery",
    notes:
      "Only if TeamFicient wants live comparison runs against Claude Fable 5.1 or Claude Sonnet 5. This is benchmark-only and not part of the default GPT-4o production setup.",
    required: false,
    paidBy: "TeamFicient",
  },
  {
    item: "Gemini benchmark usage (Optional)",
    estimate: "Usually small / capped during discovery",
    notes:
      "Only if TeamFicient wants live comparison runs against Gemini through Vertex AI. This is benchmark-only and not part of the default GPT-4o production setup.",
    required: false,
    paidBy: "TeamFicient",
  },
  {
    item: "Post-Launch Support Retainer (Optional)",
    estimate: "$500–$700/month",
    notes:
      "Optional retainer for ongoing monitoring, prompt refinement, bug fixes, and minor enhancements. Includes up to 10 hours/month at the same $40/hr project rate.",
    required: false,
    paidBy: "TeamFicient → Vendor",
  },
];

export default function CostBreakdown() {
  return (
    <SectionWrapper
      id="cost"
      number="08"
      title="Cost Breakdown"
      subtitle="Development cost plus separate recurring/usage-based costs. All third-party platform costs identified separately from development fees."
      className="bg-white"
    >
      {/* ==================== PART 1: Development Costs ==================== */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">💰</span>
          <h3 className="text-xl font-bold text-slate-900">
            Part 1: One-Time Development Costs
          </h3>
        </div>
        <p className="text-sm text-slate-500 mb-6 ml-10">
          My development fees only. Fixed project price based on estimated hours at $40/hr.
          <strong className="text-slate-700"> No third-party costs included here.</strong>
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left p-4 font-bold text-slate-700 rounded-tl-xl">Phase</th>
                <th className="text-center p-4 font-bold text-slate-700">Hours</th>
                <th className="text-center p-4 font-bold text-slate-700">Rate</th>
                <th className="text-right p-4 font-bold text-slate-700 rounded-tr-xl">Cost</th>
              </tr>
            </thead>
            <tbody>
              {developmentCosts.map((row, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-blue-50/50 transition-colors">
                  <td className="p-4">
                    <div className="font-medium text-slate-900">{row.phase}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{row.desc}</div>
                  </td>
                  <td className="p-4 text-center font-medium text-slate-700">{row.hours}</td>
                  <td className="p-4 text-center text-slate-500">{row.rate}</td>
                  <td className="p-4 text-right font-bold text-slate-900">{row.cost}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-blue-700 text-white">
                <td className="p-4 font-bold rounded-bl-xl">TOTAL DEVELOPMENT</td>
                <td className="p-4 text-center font-bold">106–140 hrs</td>
                <td className="p-4 text-center">$40/hr</td>
                <td className="p-4 text-right font-bold text-lg rounded-br-xl">$4,200–$6,000</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Payment structure */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 className="font-bold text-blue-900 mb-3">💳 Suggested Payment Structure</h4>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-blue-200 text-center">
              <div className="text-sm text-blue-600 font-medium">Milestone 1</div>
              <div className="text-2xl font-bold text-blue-900 mt-1">30%</div>
              <div className="text-xs text-slate-500 mt-1">On project kick-off &amp; discovery sign-off</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-200 text-center">
              <div className="text-sm text-blue-600 font-medium">Milestone 2</div>
              <div className="text-2xl font-bold text-blue-900 mt-1">40%</div>
              <div className="text-xs text-slate-500 mt-1">On first automated report generated</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-200 text-center">
              <div className="text-sm text-blue-600 font-medium">Milestone 3</div>
              <div className="text-2xl font-bold text-blue-900 mt-1">30%</div>
              <div className="text-xs text-slate-500 mt-1">On final delivery, UAT &amp; handoff</div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== PART 2: Third-Party Platform Costs ==================== */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">🏗️</span>
          <h3 className="text-xl font-bold text-slate-900">
            Part 2: Third-Party Platform Costs
          </h3>
        </div>
        <p className="text-sm text-slate-500 mb-6 ml-10">
          All third-party software, APIs, hosting, AI services, and integrations identified separately.
          <strong className="text-slate-700"> These are NOT included in development costs above.</strong>
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-50">
                <th className="text-left p-4 font-bold text-slate-700 rounded-tl-xl">Platform / Service</th>
                <th className="text-center p-4 font-bold text-slate-700">Type</th>
                <th className="text-center p-4 font-bold text-slate-700">Status</th>
                <th className="text-center p-4 font-bold text-slate-700 rounded-tr-xl">One-Time Cost</th>
              </tr>
            </thead>
            <tbody>
              {thirdPartyPlatforms.map((row, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-amber-50/50 transition-colors">
                  <td className="p-4">
                    <div className="font-medium text-slate-900">{row.platform}</div>
                    <div className="text-xs text-slate-400 mt-0.5 max-w-md">{row.notes}</div>
                  </td>
                  <td className="p-4 text-center text-slate-600">{row.type}</td>
                  <td className="p-4 text-center">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        row.category === "Existing"
                          ? "bg-green-100 text-green-700"
                          : row.category === "Existing (Enable)"
                          ? "bg-green-100 text-green-700"
                          : row.category === "Vendor-Proposed"
                          ? "bg-purple-100 text-purple-700"
                          : row.category === "May Need Setup"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {row.category}
                    </span>
                  </td>
                  <td className="p-4 text-center font-bold text-green-700">{row.oneTimeCost}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-amber-600 text-white">
                <td className="p-4 font-bold rounded-bl-xl" colSpan={3}>
                  TOTAL ONE-TIME THIRD-PARTY COSTS
                </td>
                <td className="p-4 text-center font-bold text-lg rounded-br-xl">$0</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-sm text-green-800">
            <strong>✓ No upfront third-party license or platform costs.</strong> All proposed services are
            pay-per-use with no setup fees. TeamFicient only pays for actual usage (see recurring costs below).
          </p>
        </div>
      </div>

      {/* ==================== PART 3: Recurring / Usage-Based Costs ==================== */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">🔄</span>
          <h3 className="text-xl font-bold text-slate-900">
            Part 3: Recurring & Usage-Based Costs
          </h3>
        </div>
        <p className="text-sm text-slate-500 mb-6 ml-10">
          Ongoing monthly costs for AI APIs, cloud infrastructure, and optional services.
          <strong className="text-slate-700"> Paid directly by TeamFicient to the respective providers.</strong>
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {recurringCosts.map((item, i) => (
            <div
              key={i}
              className={`rounded-xl p-5 border ${
                item.required
                  ? "bg-amber-50 border-amber-200"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-slate-900 text-sm">{item.item}</h4>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    item.required
                      ? "bg-amber-200 text-amber-800"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {item.required ? "Required" : "Optional"}
                </span>
              </div>
              <div className="text-lg font-bold text-blue-700 mb-1">{item.estimate}</div>
              <div className="text-xs text-slate-500 mb-2">{item.notes}</div>
              <div className="text-xs text-slate-400">
                <strong>Paid by:</strong> {item.paidBy}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h4 className="font-bold text-green-900 mb-1">
                Total Estimated Monthly Running Cost
              </h4>
              <p className="text-green-800">
                <strong>$25–$110/month</strong> for required services (AI API + GCP compute).
                This is a fraction of the cost of the manual labor hours it replaces.
              </p>
            </div>
          </div>
        </div>

        {/* Grand summary */}
        <div className="bg-slate-900 rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-6">📊 Complete Investment Summary</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm text-center">
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Development</div>
              <div className="text-2xl font-bold text-white">$4,200–$6,000</div>
              <div className="text-xs text-slate-400 mt-1">One-time (my fees only)</div>
            </div>
            <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm text-center">
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Third-Party Setup</div>
              <div className="text-2xl font-bold text-green-400">$0</div>
              <div className="text-xs text-slate-400 mt-1">No licenses or setup fees</div>
            </div>
            <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm text-center">
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Monthly Running</div>
              <div className="text-2xl font-bold text-cyan-300">$25–$110/mo</div>
              <div className="text-xs text-slate-400 mt-1">API usage + cloud compute</div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
