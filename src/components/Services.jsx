import React from 'react';
import { Shield, Clock, MapPin } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Executive Safety',
    desc: 'Professionally trained chauffeurs, vetted routes, and discreet service for peace of mind.'
  },
  {
    icon: Clock,
    title: 'On-Time Precision',
    desc: 'Proactive dispatching and real-time tracking to ensure you arrive when you intend to.'
  },
  {
    icon: MapPin,
    title: 'Anywhere You Need',
    desc: 'Airport transfers, business travel, events, and bespoke itineraries—handled end-to-end.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0b0b0e] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">Our Services</span>
          </h2>
          <p className="mt-3 text-white/70">
            A premium black car experience engineered for executives, creators, and connoisseurs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 shadow-xl ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-white/[0.07]"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-amber-300 to-yellow-500 text-black shadow-lg">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{desc}</p>
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-yellow-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
