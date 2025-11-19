import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-md flex items-center justify-center text-white font-bold">TC</div>
          <span className="font-semibold text-slate-800">Travel Creator</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#why" className="hover:text-slate-900 transition-colors">Why Us</a>
          <a href="#mediakit" className="hover:text-slate-900 transition-colors">Media Kit</a>
          <a href="#work" className="hover:text-slate-900 transition-colors">Work With Us</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/70 border border-white/40 shadow-sm">
          <Menu className="h-5 w-5 text-slate-700" />
        </button>
      </div>
    </header>
  );
}
