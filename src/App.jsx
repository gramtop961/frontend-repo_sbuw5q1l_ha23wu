import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import CTA from './components/CTA.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0e] text-white">
      <Navbar />
      <Hero />
      <Services />
      <CTA />
    </div>
  );
}
