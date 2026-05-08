export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Startup KPI Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Smart alerts when startup metrics<br className="hidden sm:block" /> hit danger zones
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Monitor CAC, LTV, churn, and runway in real time. Get email and Slack alerts the moment trends signal trouble — before they become critical.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Monitoring — $39/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to try.</p>

        {/* Metric badges */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          {[
            { label: "CAC", desc: "Cost to acquire a customer", color: "text-[#f78166]" },
            { label: "LTV", desc: "Lifetime value trend", color: "text-[#3fb950]" },
            { label: "Churn", desc: "Monthly churn rate", color: "text-[#d29922]" },
            { label: "Runway", desc: "Months of cash left", color: "text-[#58a6ff]" }
          ].map((m) => (
            <div key={m.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className={`text-xl font-bold ${m.color}`}>{m.label}</div>
              <div className="text-xs text-[#8b949e] mt-1">{m.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$39<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay ahead of problems</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Connect Stripe, analytics & spreadsheets",
              "CAC, LTV, churn & runway tracking",
              "Configurable alert thresholds",
              "Email & Slack notifications",
              "Trend analysis & early warnings",
              "Unlimited metric history"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#3fb950] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does it connect to my data?",
              a: "KPI Alerts integrates with Stripe for revenue data, Google Sheets or CSV uploads for custom metrics, and popular analytics tools via API keys. Setup takes under 10 minutes."
            },
            {
              q: "When will I receive an alert?",
              a: "Alerts fire when a metric crosses your configured threshold or when our trend engine detects a deteriorating pattern — giving you days of lead time before a metric becomes critical."
            },
            {
              q: "Can I customize the alert thresholds?",
              a: "Yes. Every metric has fully configurable warning and critical thresholds. You can also set trend-based rules like \"alert if churn increases more than 20% week-over-week\"."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} KPI Alerts. All rights reserved.
      </footer>
    </main>
  );
}
