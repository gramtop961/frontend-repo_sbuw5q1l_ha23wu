import { motion } from 'framer-motion';
import { Crown, Shield, Clock } from 'lucide-react';

const services = [
  {
    icon: Crown,
    title: 'Executive Transfers',
    desc: 'Discreet door-to-door service for business and VIP travel with immaculate vehicles.'
  },
  {
    icon: Shield,
    title: 'Event & Wedding Chauffeurs',
    desc: 'Arrive in style for weddings, galas, and red carpet occasions with white-glove service.'
  },
  {
    icon: Clock,
    title: 'Hourly & Long Distance',
    desc: 'Flexible bookings by the hour or long-range journeys with absolute comfort.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute right-20 bottom-10 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Our Signature Services
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/15 border border-yellow-400/30 text-yellow-200 shadow-[0_0_25px_rgba(234,179,8,0.25)]">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-yellow-400/10 blur-3xl transition opacity-0 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
