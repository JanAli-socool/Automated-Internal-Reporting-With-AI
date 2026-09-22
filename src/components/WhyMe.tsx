import SectionWrapper from "./SectionWrapper";

const strengths = [
  {
    icon: "🤖",
    title: "AI Engineering Expertise",
    description:
      "Deep hands-on experience with LLM integration, prompt engineering, and building production AI systems that deliver reliable, consistent output.",
  },
  {
    icon: "⚡",
    title: "Full-Stack Automation",
    description:
      "I build end-to-end — from data extraction and pipeline orchestration to AI processing and final delivery. No hand-offs between specialists needed.",
  },
  {
    icon: "🔧",
    title: "Google Workspace Native",
    description:
      "Extensive experience with Google Sheets API, Apps Script, Cloud Functions, and Looker Studio — your existing stack is my comfort zone.",
  },
  {
    icon: "📊",
    title: "Data & Reporting Background",
    description:
      "Strong track record of building automated reporting and analytics systems that transform raw data into actionable management insights.",
  },
  {
    icon: "🤝",
    title: "Communication & Transparency",
    description:
      "Clear, proactive communication throughout. Weekly updates, milestone demos, and no surprises. I treat your project like my own.",
  },
  {
    icon: "🎯",
    title: "Results-Oriented",
    description:
      "I focus on delivering measurable business value, not just technical features. The goal is saving your team hours every week, not building impressive-looking tech.",
  },
];

export default function WhyMe() {
  return (
    <SectionWrapper
      id="why-me"
      number="12"
      title="Why Work With Me"
      subtitle="What I bring to this engagement and why I'm the right fit for TeamFicient."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {strengths.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
          >
            <div className="text-4xl mb-4">{s.icon}</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>

      {/* Testing & Acceptance */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span className="text-2xl">🧪</span> Testing & Acceptance Approach
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-slate-700 mb-3">How the solution will be tested:</h4>
            <ul className="space-y-2">
              {[
                "Unit tests for data extraction and transformation logic",
                "Integration tests for end-to-end pipeline execution",
                "AI output quality validation against benchmark reports",
                "Error scenario testing (missing data, API failures, malformed inputs)",
                "Load testing for concurrent report generation",
                "User acceptance testing (UAT) with real stakeholders",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="text-green-500 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-700 mb-3">Acceptance criteria:</h4>
            <ul className="space-y-2">
              {[
                "Automated pipeline runs on schedule without manual intervention",
                "Reports contain all required KPIs with accurate calculations",
                "AI summaries are coherent, relevant, and consistent in tone",
                "Validation catches and alerts on data quality issues",
                "Dashboard displays real-time data from automated pipeline",
                "Documentation enables TeamFicient team to operate independently",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="text-blue-500 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Post-Launch Support */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
          <span className="text-2xl">🛟</span> Post-Launch Support & Maintenance
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-green-800 mb-2">Included (30 days)</h4>
            <ul className="space-y-1 text-sm text-green-700">
              <li>• Bug fixes and critical issues</li>
              <li>• Pipeline monitoring</li>
              <li>• Prompt adjustments</li>
              <li>• Email support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-green-800 mb-2">Optional Retainer</h4>
            <ul className="space-y-1 text-sm text-green-700">
              <li>• $500–$700/month</li>
              <li>• Up to 10 hrs/month @ $40/hr</li>
              <li>• Ongoing monitoring</li>
              <li>• Feature enhancements</li>
              <li>• Priority support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-green-800 mb-2">Full-Time Transition</h4>
            <ul className="space-y-1 text-sm text-green-700">
              <li>• Open to full-time role</li>
              <li>• Seamless knowledge continuity</li>
              <li>• Expand to new projects</li>
              <li>• Long-term partnership</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
