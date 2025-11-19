export default function CTA() {
  return (
    <section id="work" className="relative py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Let’s create your next destination story</h2>
        <p className="mt-3 text-slate-600">Tell us your goals—awareness, bookings, UGC—for a custom proposal within 24 hours.</p>
        <form className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input type="text" placeholder="Your name" className="h-12 rounded-xl border border-slate-300 px-4 focus:outline-none focus:ring-2 focus:ring-slate-900" />
          <input type="email" placeholder="Work email" className="h-12 rounded-xl border border-slate-300 px-4 focus:outline-none focus:ring-2 focus:ring-slate-900" />
          <input type="text" placeholder="Brand / Destination" className="h-12 rounded-xl border border-slate-300 px-4 focus:outline-none focus:ring-2 focus:ring-slate-900" />
          <textarea placeholder="Project details (timeline, deliverables, KPIs)" className="sm:col-span-3 min-h-[120px] rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" />
          <div className="sm:col-span-3 flex items-center justify-center gap-3">
            <button type="submit" className="inline-flex items-center justify-center px-6 h-12 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors">Request proposal</button>
            <a href="#mediakit" className="text-slate-600 hover:text-slate-900 underline underline-offset-4">See media kit</a>
          </div>
        </form>
      </div>
    </section>
  );
}
