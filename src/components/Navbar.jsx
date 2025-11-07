import React from 'react';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="https://chauffeurduroi.com/assets/e39b3ae5-cff9-4ffd-963c-59fa1b204bf9_1759371059607-DL4VNu0t.png"
            alt="Chauffeur Du Roi logo"
            className="h-9 w-auto"
            loading="eager"
            decoding="async"
          />
          <span className="font-semibold tracking-wide text-white">Chauffeur Du Roi</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#services" className="text-sm text-white/80 transition hover:text-white">Services</a>
          <a href="#fleet" className="text-sm text-white/80 transition hover:text-white">Fleet</a>
          <a href="#about" className="text-sm text-white/80 transition hover:text-white">About</a>
        </nav>
        <a
          href="#book"
          className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300 shadow-[0_0_30px_-10px_rgba(251,191,36,0.8)] transition hover:bg-amber-400/20"
        >
          <Phone className="h-4 w-4" /> Book Now
        </a>
      </div>
    </header>
  );
}
