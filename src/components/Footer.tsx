"use client";

import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* CTA */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Move Forward?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            I&apos;m excited about the opportunity to work with TeamFicient on this project. 
            Let&apos;s schedule the follow-up interview to discuss the details.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.print()}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40 no-print"
            >
              Download as PDF
            </button>
            <a
              href="#executive-summary"
              className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 transition-all no-print"
            >
              ↑ Back to Top
            </a>
          </div>
        </div>

        {/* Pre-Interview Questions */}
        <div className="bg-slate-800 rounded-2xl p-8 mb-12 text-left border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Icon name="message" size={22} className="text-blue-400" /> Questions for Our Follow-Up Interview
          </h3>
          <p className="text-slate-400 mb-6">
            The RFP mentions a follow-up interview to go over the details. To ensure we hit the ground running, I've prepared a few foundational discovery questions for our conversation:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-slate-300">
              <span className="text-blue-400 font-bold">1.</span>
              <div>
                <strong className="text-white block">Current Manual Workflow & Drivers:</strong>
                Why is automation specifically required right now? What exactly does the manual work entail, why is it necessary, and how is the team currently performing it?
              </div>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <span className="text-blue-400 font-bold">2.</span>
              <div>
                <strong className="text-white block">Data Origins:</strong>
                Where exactly is the source data originating from before it gets compiled into the reports?
              </div>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <span className="text-blue-400 font-bold">3.</span>
              <div>
                <strong className="text-white block">Frequency & Sources:</strong>
                What is the exact reporting frequency required, and what are all the specific contributing data sources?
              </div>
            </li>
          </ul>
        </div>

        {/* Quick Summary */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 border-t border-slate-800 pt-12">
          <div>
            <div className="text-sm text-slate-500 mb-1">Project</div>
            <div className="font-bold">AI Internal Report</div>
          </div>
          <div>
            <div className="text-sm text-slate-500 mb-1">Timeline</div>
            <div className="font-bold">6–8 Weeks</div>
          </div>
          <div>
            <div className="text-sm text-slate-500 mb-1">Investment</div>
            <div className="font-bold">$4,200–$6,000</div>
          </div>
          <div>
            <div className="text-sm text-slate-500 mb-1">Monthly Cost</div>
            <div className="font-bold">~$25–$110/mo</div>
          </div>
        </div>

        {/* Proposal metadata */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div>
            <strong className="text-slate-400">Prepared for:</strong> TeamFicient
          </div>
          <div>
            <strong className="text-slate-400">Project:</strong> AI Internal Report (RFP Response)
          </div>
          <div>
            <strong className="text-slate-400">Date:</strong>{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-600">
          This proposal is confidential and intended solely for TeamFicient. 
          Valid for 30 days from the date above.
        </div>
      </div>
    </footer>
  );
}
