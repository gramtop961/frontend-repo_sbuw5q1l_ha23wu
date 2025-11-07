import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b0e] text-white">
      {/* 3D Scene as full-width cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/NoYj4XN8s0IlixJM/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Glow gradients - don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.img
          src="https://chauffeurduroi.com/assets/e39b3ae5-cff9-4ffd-963c-59fa1b204bf9_1759371059607-DL4VNu0t.png"
          alt="Chauffeur Du Roi Logo"
          className="mb-6 h-14 w-auto opacity-90"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        />

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Royal Chauffeur Service
          <span className="block bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
            Chauffeur Du Roi
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-base sm:text-lg text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Arrive with presence. Premium private rides with a golden touch — crafted for business, events, and unforgettable moments.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-yellow-400/50 bg-gradient-to-br from-yellow-400/30 via-amber-300/20 to-yellow-500/30 px-6 py-3 text-sm font-semibold text-yellow-100 shadow-[0_0_25px_rgba(234,179,8,0.25)] hover:shadow-[0_0_45px_rgba(234,179,8,0.45)] transition"
          >
            Book Your Ride
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition border border-white/10"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
