import Icon from "./Icon";
import SectionWrapper from "./SectionWrapper";

const strategyCards = [
  {
    title: "Production Build Target",
    value: "GPT-4o",
    description: "Primary model used for the live reporting workflow unless discovery proves another option materially better.",
    color: "green",
  },
  {
    title: "Comparison Set",
    value: "Claude + Gemini",
    description: "Shortlisted alternatives benchmarked on sample reports so the final choice is evidence-based, not assumed.",
    color: "blue",
  },
  {
    title: "Decision Timing",
    value: "Discovery / Pilot",
    description: "Model scorecard delivered before full production rollout, so TeamFicient understands trade-offs clearly.",
    color: "purple",
  },
];

const models = [
  {
    name: "OpenAI GPT-4o",
    provider: "OpenAI",
    status: "Primary build target",
    recommended: true,
    pricing: "Project estimate: ~low monthly cost at TeamFicient's expected volume (see Cost section)",
    strengths: [
      "Excellent business-writing quality for executive summaries and management narratives",
      "Strong structured-output reliability for KPI tables and report sections",
      "Mature API ecosystem and fastest path to a stable production rollout",
      "Best fit for 'ship now' implementation speed and maintainability",
    ],
    limitations: [
      "Not necessarily the absolute cheapest option",
      "Should still be benchmarked against Claude and Gemini on TeamFicient sample data",
      "Privacy/compliance settings must be confirmed during discovery",
    ],
    role: "This is the model I recommend we build around first.",
  },
  {
    name: "Claude Fable 5.1",
    provider: "Anthropic",
    status: "Premium benchmark option",
    recommended: false,
    pricing: "Anthropic official pricing: $10 / MTok input, $50 / MTok output",
    strengths: [
      "Strong candidate for high-end long-form reasoning and polished analytical writing",
      "Useful as a quality ceiling benchmark against GPT-4o",
      "Good option if TeamFicient wants to test premium-quality narrative depth",
      "Officially active in Anthropic's current model lineup",
    ],
    limitations: [
      "Substantially more expensive than mid-tier alternatives",
      "May be overkill for recurring operational reporting",
      "Best suited as a comparison candidate rather than default first choice",
    ],
    role: "Benchmark for premium-quality output, not the default implementation target.",
  },
  {
    name: "Claude Sonnet 5",
    provider: "Anthropic",
    status: "Cost/performance benchmark",
    recommended: false,
    pricing: "Anthropic official pricing: $2 / MTok input, $10 / MTok output",
    strengths: [
      "Very attractive cost-to-performance profile",
      "Good model to test when balancing quality, speed, and recurring API cost",
      "Strong alternative if TeamFicient prefers Anthropic's platform posture",
      "Worth comparing directly against GPT-4o on sample reports",
    ],
    limitations: [
      "May or may not outperform GPT-4o on TeamFicient's specific reporting style",
      "Still requires a real benchmark using actual report examples",
      "Would add a second provider unless chosen as final production model",
    ],
    role: "Most practical Claude-family comparison candidate.",
  },
  {
    name: "Gemini 3.8 Flash",
    provider: "Google / Vertex AI",
    status: "Google-native benchmark",
    recommended: false,
    pricing: "Indicative Vertex AI pricing is generally competitive; exact route confirmed during discovery",
    strengths: [
      "Natural fit with Google-centric environments like Sheets, Workspace, and Looker Studio",
      "Attractive option if TeamFicient wants stronger alignment with Google Cloud tooling",
      "Good candidate for future expansion inside the Google stack",
      "Strong option to benchmark for ecosystem fit and operational simplicity",
    ],
    limitations: [
      "May require more setup complexity through Vertex AI",
      "Narrative style/output quality should be tested directly against GPT-4o",
      "Model/version selection inside Google's lineup should be confirmed during discovery",
    ],
    role: "Best ecosystem-fit comparison candidate for a Google-first architecture.",
  },
];

const evaluationCriteria = [
  "Narrative quality: clarity, professionalism, and usefulness for management",
  "KPI faithfulness: no invented numbers, no drift from the source data",
  "Structured output reliability: clean sections, repeatable formatting, JSON/table stability",
  "Prompt controllability: ability to keep tone, layout, and report logic consistent",
  "Latency: acceptable response time for scheduled internal reporting",
  "Cost efficiency: recurring spend at expected report volume",
  "Privacy/compliance fit: whether the provider matches TeamFicient's requirements",
];

export default function AIRecommendation() {
  return (
    <SectionWrapper
      id="ai-recommendation"
      number="03"
      title="AI/LLM Service Recommendation"
      subtitle="Yes — we can compare multiple models while still building the live workflow around GPT-4o."
      className="bg-white"
    >
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-8 text-white mb-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
          <div>
            <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">
              Recommended Model Strategy
            </div>
            <h3 className="text-2xl font-bold mb-2">Compare Many, Ship One</h3>
            <p className="text-slate-300 max-w-3xl leading-relaxed">
              My recommendation is to <strong>build the production reporting workflow on GPT-4o</strong>,
              while running a targeted benchmark against shortlisted alternatives like <strong>Claude Fable 5.1</strong>,
              <strong> Claude Sonnet 5</strong>, and <strong>Gemini 3.8 Flash</strong>. That gives TeamFicient
              both speed of execution and a defensible model-selection process.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-5 border border-white/10 min-w-[250px]">
            <div className="text-sm text-slate-300 mb-1">Default production model</div>
            <div className="text-3xl font-bold text-white">GPT-4o</div>
            <div className="text-xs text-cyan-300 mt-2">Benchmark alternatives during discovery/pilot</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {strategyCards.map((card) => (
            <div key={card.title} className="bg-white/10 rounded-xl p-4 border border-white/10">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">{card.title}</div>
              <div className="text-xl font-bold text-white mb-1">{card.value}</div>
              <p className="text-sm text-slate-300">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
        <h3 className="text-lg font-bold text-slate-900 mb-3">What this means in practice</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
          <div className="bg-white rounded-xl p-4 border border-blue-100">
            <div className="font-semibold text-blue-700 mb-1">Implementation path</div>
            We build prompts, validation, report formatting, and delivery around GPT-4o so the project moves forward without waiting.
          </div>
          <div className="bg-white rounded-xl p-4 border border-blue-100">
            <div className="font-semibold text-blue-700 mb-1">Comparison path</div>
            We run a controlled test using the same sample inputs across GPT-4o, Claude, and Gemini, then score the outputs side by side.
          </div>
          <div className="bg-white rounded-xl p-4 border border-blue-100">
            <div className="font-semibold text-blue-700 mb-1">Decision rule</div>
            GPT-4o stays the default unless another model shows a clear advantage in quality, cost, privacy, or ecosystem fit.
          </div>
          <div className="bg-white rounded-xl p-4 border border-blue-100">
            <div className="font-semibold text-blue-700 mb-1">Architecture implication</div>
            The pipeline is built with a model-adapter layer so the underlying LLM can be swapped later without rebuilding the system.
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 mb-2">Shortlisted Models for Comparison</h3>
        <p className="text-sm text-slate-500">
          These are the practical candidates I would compare for this use case: one production default,
          one premium quality benchmark, one Claude cost/performance option, and one Google-native alternative.
        </p>
      </div>

      <div className="space-y-6 mb-10">
        {models.map((model) => (
          <div
            key={model.name}
            className={`rounded-2xl p-6 border-2 ${
              model.recommended ? "bg-green-50/60 border-green-300 shadow-md" : "bg-white border-slate-200"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-5">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h4 className="text-xl font-bold text-slate-900">{model.name}</h4>
                  {model.recommended && (
                    <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      BUILD TARGET
                    </span>
                  )}
                </div>
                <div className="text-sm text-slate-500">{model.role}</div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                  {model.provider}
                </span>
                <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {model.status}
                </span>
              </div>
            </div>

            <div className="text-sm text-slate-500 mb-4">
              <strong>Pricing signal:</strong> {model.pricing}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2">Strengths</div>
                <ul className="space-y-1.5">
                  {model.strengths.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2">Watch-outs</div>
                <ul className="space-y-1.5">
                  {model.limitations.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">−</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Position in this proposal</div>
                <p className="text-sm text-slate-600 bg-blue-50 rounded-lg p-3 border border-blue-100">
                  {model.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-10">
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Benchmark Criteria</h3>
          <ul className="space-y-2">
            {evaluationCriteria.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="text-blue-500 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-900 rounded-2xl p-6 text-white">
          <h3 className="text-lg font-bold mb-4">Benchmark Deliverable</h3>
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              During discovery/pilot, I can provide a concise <strong>LLM Comparison Scorecard</strong>
              showing how GPT-4o, Claude, and Gemini perform on the same sample report set.
            </p>
            <p>
              This lets TeamFicient make a decision based on actual report quality, consistency,
              latency, privacy fit, and recurring cost — not marketing claims.
            </p>
            <p>
              If GPT-4o remains best overall, we proceed without disruption because the production
              implementation is already built around it.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <Icon name="warning" size={22} className="text-amber-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-amber-900 mb-1">Practical Note on Cost and Access</h4>
            <p className="text-sm text-amber-800 leading-relaxed">
              A live multi-model bake-off may require temporary access to Anthropic and/or Google Vertex AI in addition to OpenAI.
              I would keep that comparison small and controlled, and any third-party usage would be identified separately from development
              cost before running it. In other words: <strong>yes, we can absolutely compare other models while still working with GPT-4o</strong> —
              we just do it deliberately, with clear scoring and transparent cost handling.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
