import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import MediaKit from './components/MediaKit'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <WhyUs />
      <MediaKit />
      <CTA />
      <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Travel Creator • Visuals by Spline • Built for modern travel brands
      </footer>
    </div>
  )
}

export default App
