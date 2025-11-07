import React from 'react';

export default function CTA() {
  return (
    <section id="book" className="relative overflow-hidden bg-[#0b0b0e] py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-yellow-500/5 via-transparent to-yellow-500/5" />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">Reserve Your Chauffeur</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/75">
          Tell us your pickup, destination, and schedule. We’ll confirm promptly and handle the rest.
        </p>
        <form className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          <input type="text" placeholder="Pickup Location" className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-amber-300/0 transition focus:ring-2" />
          <input type="text" placeholder="Destination" className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-amber-300/0 transition focus:ring-2" />
          <input type="datetime-local" className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-amber-300/0 transition focus:ring-2 sm:col-span-2" />
          <button type="button" className="rounded-md bg-gradient-to-br from-amber-300 to-yellow-500 px-6 py-3 font-semibold text-black shadow-[0_10px_30px_-10px_rgba(251,191,36,0.85)] transition hover:brightness-110 sm:col-span-2">
            Book Your Ride
          </button>
        </form>
      </div>
    </section>
  );
}
