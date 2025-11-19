export default function WhyUs() {
  const points = [
    {
      title: "Measured impact",
      desc: "Campaigns engineered for conversions: bookings, sign-ups, and measurable ROI.",
      stat: "+6.2% CTR avg",
    },
    {
      title: "Cinematic craft",
      desc: "A modern, minimalist aesthetic—high fidelity photo, video, and drone.",
      stat: "4K/120 • FPV",
    },
    {
      title: "Audience you want",
      desc: "350k+ travel-first followers across IG, TikTok, and YouTube.",
      stat: "350k+ reach",
    },
    {
      title: "Agile production",
      desc: "Lean crew, fast turnarounds, global-ready.",
      stat: "72h delivery",
    },
  ];

  return (
    <section id="why" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Why partner with us</h2>
          <p className="mt-3 text-slate-600">We blend creative excellence with data-backed distribution to deliver real business outcomes for destinations and travel brands.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-shadow bg-white">
              <div className="text-xs font-medium text-slate-500">{p.stat}</div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
