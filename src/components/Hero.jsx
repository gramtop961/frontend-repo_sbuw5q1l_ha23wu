import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[90vh] items-center overflow-hidden bg-[#0b0b0e] pt-16">
      {/* Spline Background Cover */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Subtle dark gradient for contrast – non-blocking */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      </div>

      {/* Gold glow accents (non-interactive) */}
      <div className="pointer-events-none absolute -left-24 top-1/3 z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-amber-400/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-64 w-64 rounded-full bg-yellow-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-80 w-[40rem] -translate-x-1/2 rounded-[999px] bg-gradient-to-r from-amber-300/20 via-amber-400/30 to-yellow-500/20 blur-3xl" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl font-extrabold tracking-tight sm:text-6xl"
          >
            <span className="bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Chauffeur Du Roi
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="mt-4 max-w-xl text-base text-white/85 sm:text-lg"
          >
            Black car service for those who demand precision, privacy, and presence. Arrive with intention—every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#book"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(251,191,36,0.85)] transition focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-black hover:brightness-110"
            >
              Book Your Ride
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-amber-300/40 bg-black/30 px-6 py-3 text-sm font-semibold text-amber-200 backdrop-blur transition hover:bg-black/50"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
