import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://chauffeurduroi.com/assets/e39b3ae5-cff9-4ffd-963c-59fa1b204bf9_1759371059607-DL4VNu0t.png"
              alt="Chauffeur Du Roi Logo"
              className="h-9 w-auto drop-shadow-[0_0_20px_rgba(234,179,8,0.35)]"
            />
            <span className="text-lg font-semibold tracking-wide bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Chauffeur Du Roi
            </span>
          </motion.a>

          <motion.nav
            className="hidden md:flex items-center gap-8 text-sm text-white/80"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a href="#services" className="hover:text-yellow-300 transition">Services</a>
            <a href="#fleet" className="hover:text-yellow-300 transition">Fleet</a>
            <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
          </motion.nav>

          <motion.a
            href="#contact"
            className="inline-flex items-center rounded-full border border-yellow-400/40 bg-gradient-to-br from-yellow-400/20 via-amber-300/10 to-yellow-500/20 px-4 py-2 text-sm font-medium text-yellow-200 shadow-[0_0_20px_rgba(234,179,8,0.25)] hover:shadow-[0_0_35px_rgba(234,179,8,0.45)] transition"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Book Now
          </motion.a>
        </div>
      </div>
    </header>
  );
}
