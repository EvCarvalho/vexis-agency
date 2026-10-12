import React from 'react';
import { Hero } from './components/Hero';
import { Pitch } from './components/Pitch';
import { Authority } from './components/Authority';
import { Features } from './components/Features';
import { Why } from './components/Why';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Pricing } from './components/Pricing';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-neon selection:text-black">
      {/* Navigation (Simple Overlay) */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            <img src="/logo.png" alt="Vexis Agency logo landing pages Niterói RJ" className="h-10 w-10 object-contain group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-black tracking-tighter uppercase">
              VEXIS <span className="text-neon transition-colors group-hover:text-white">AGENCY</span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 font-mono text-xs uppercase tracking-widest">
              <a href="#features" className="hover:text-neon transition-colors">O que inclui</a>
              <a href="#portfolio" className="hover:text-neon transition-colors">Portfólio</a>
              <a href="#pricing" className="hover:text-neon transition-colors">Planos</a>
              <a href="#testimonials" className="hover:text-neon transition-colors">Depoimentos</a>
              <a href="#faq" className="hover:text-neon transition-colors">FAQ</a>
            </div>
            {/* Desktop CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neon text-black px-5 py-2 font-bold text-xs uppercase hover:bg-white hover:scale-105 transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
            >
              Falar Agora
            </a>
          </div>

          {/* Mobile CTA */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden bg-neon text-black px-4 py-1 font-bold text-xs uppercase active:scale-95 transition-transform"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Pitch />
        <Authority />
        <Features />
        <Why />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
};

export default App;