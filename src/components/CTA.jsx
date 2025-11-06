import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-[#0b0b0e] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h3
          className="text-3xl sm:text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Travel Like Royalty
        </motion.h3>
        <motion.p
          className="mt-3 text-white/75"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Tell us your pickup, destination, and schedule — we’ll handle the rest with precision and class.
        </motion.p>

        <motion.form
          className="mt-8 grid gap-4 sm:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" placeholder="Full Name" className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" />
          <input type="email" placeholder="Email" className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" />
          <input type="text" placeholder="Pickup Location" className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" />
          <input type="text" placeholder="Destination" className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" />
          <textarea placeholder="Notes (date, time, special requests)" className="sm:col-span-2 min-h-[120px] w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" />
          <button className="sm:col-span-2 inline-flex items-center justify-center rounded-full border border-yellow-400/50 bg-gradient-to-br from-yellow-400/30 via-amber-300/20 to-yellow-500/30 px-6 py-3 text-sm font-semibold text-yellow-100 shadow-[0_0_25px_rgba(234,179,8,0.25)] hover:shadow-[0_0_45px_rgba(234,179,8,0.45)] transition">
            Request a Quote
          </button>
        </motion.form>
      </div>
    </section>
  );
}
