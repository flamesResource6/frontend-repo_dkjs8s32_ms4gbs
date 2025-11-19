export default function MediaKit() {
  const metrics = [
    { label: 'Instagram', value: '180k', detail: 'Avg ER 4.8%' },
    { label: 'TikTok', value: '120k', detail: '12M monthly views' },
    { label: 'YouTube', value: '65k', detail: 'Watch time 2.6M min' },
    { label: 'Newsletter', value: '22k', detail: '42% open rate' },
  ]

  const deliverables = [
    'Destination films (15–60s)',
    'UGC suites for paid + organic',
    'Hotel & airline features',
    'Drone & FPV sequences',
    'Photo sets for web & socials',
    'Travel guides & blog posts'
  ]

  return (
    <section id="mediakit" className="relative py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Media kit</h2>
            <p className="mt-3 text-slate-600 max-w-xl">Audience demographics, performance metrics, and core deliverables—everything you need to scope a high‑performing campaign.</p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {metrics.map(m => (
                <div key={m.label} className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                  <div className="text-2xl font-semibold text-slate-900">{m.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{m.label}</div>
                  <div className="text-[11px] text-slate-400 mt-2">{m.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-1">
              <div className="rounded-[22px] bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">What we deliver</h3>
                <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  {deliverables.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-4 text-xs text-slate-600">
                  Full audience breakdown, case studies, and rate card available on request.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
