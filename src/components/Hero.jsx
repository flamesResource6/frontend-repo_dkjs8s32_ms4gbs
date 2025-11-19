import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-16">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[80vh] flex items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/70 backdrop-blur border border-white/40 text-slate-700">Modern • Minimal • Cinematic</span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
              Travel content that moves audiences and brands
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-700 max-w-xl">
              We craft cinematic stories and high‑impact campaigns across destinations, hospitality, and tourism—driving bookings and brand love.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#work" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                Work with us
              </a>
              <a href="#mediakit" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/80 backdrop-blur border border-white/60 text-slate-900 hover:bg-white transition-colors">
                View media kit
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white"></div>
    </section>
  );
}
