import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Architecture from './components/Architecture';
import LiveDemo from './components/LiveDemo';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar Minimal */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-accent" />
          ShadowTool
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-secondary">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
          <a href="#demo" className="hover:text-white transition-colors">Live Demo</a>
        </div>
        <div>
          <a href="https://github.com/risheekshukla/ShadowTool" target="_blank" rel="noreferrer" className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-md hover:bg-zinc-200 transition">
            View Source
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <TechStack />
        <Architecture />
        <LiveDemo />
        <Features />
      </main>

      {/* Footer minimal */}
      <footer className="py-8 bg-[#09090b] border-t border-border text-center text-sm text-secondary">
        <p>Production-grade shadow traffic testing platform used to validate backend deployments using real request mirroring.</p>
        <p className="mt-2 text-zinc-600">Built with Spring Boot & React.</p>
      </footer>
    </div>
  );
}

export default App;
