import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CTA from './components/CTA';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-black/80">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Chauffeur Du Roi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-yellow-300 transition">Privacy</a>
            <a href="#" className="hover:text-yellow-300 transition">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
