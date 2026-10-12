import React from 'react';
import { BrutalButton } from './ui/BrutalButton';
import { Zap, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden border-b-4 border-white">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg z-0 opacity-40 pointer-events-none" />
      <div className="absolute top-20 right-0 w-64 h-64 bg-neon blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600 blur-[150px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto">
          {/* Status Bar */}
          <div className="flex flex-wrap items-center gap-4 mb-8 font-mono text-sm text-neon/80">
            <span className="border border-neon/50 px-2 py-1 flex items-center gap-2">
              <span className="w-2 h-2 bg-neon animate-pulse rounded-full"></span>
              SYSTEM ONLINE
            </span>
            <span className="hidden md:inline-block">///</span>
            <span>V 2.0.4</span>
            <span className="hidden md:inline-block">///</span>
            <span>DOMÍNIO + HOSPEDAGEM GRÁTIS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter text-white mb-6">
            Landing Pages <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-white">de Alta Conversão</span>
            <span className="block mt-2 text-neon md:text-white md:hover:text-neon transition-colors duration-300">Construídas para Vender</span>
            <span className="text-3xl md:text-5xl lg:text-6xl block mt-4 border-l-8 border-neon pl-6 text-gray-200">
              Brasil & Exterior
            </span>
          </h1>

          {/* Subheadline & Offer */}
          <div className="flex flex-col md:flex-row md:items-end gap-8 mb-12">
            <p className="text-lg md:text-xl text-gray-300 font-mono max-w-xl leading-relaxed">
              Crie landing pages que vendem: rápida, mobile-first e projetada para transformar tráfego em faturamento e autoridade instantânea.
            </p>

            <div className="bg-white/5 backdrop-blur-sm border border-white/20 p-4 md:ml-auto transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <span className="block text-sm text-gray-400 font-mono uppercase">Domínio Grátis</span>
              <span className="block text-[10px] text-gray-500 font-mono uppercase mb-1">A partir de</span>
              <span className="block text-4xl font-bold text-neon">R$ 690</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6">
            <BrutalButton variant="primary">
              Peça sua Landing em 3 Dias
            </BrutalButton>
            <div className="flex flex-col justify-center space-y-2 text-sm font-mono text-gray-400 pl-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-neon" />
                Entrega em 3 dias
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-neon" />
                Pagamento seguro
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative scrolling text */}
      <div className="absolute bottom-0 left-0 w-full bg-neon text-black overflow-hidden py-1 border-t-2 border-black font-black uppercase text-sm tracking-widest whitespace-nowrap opacity-80">
        <div className="animate-marquee inline-block">
          CONVERSÃO • VELOCIDADE • DESIGN • AUTORIDADE • CONVERSÃO • VELOCIDADE • DESIGN • AUTORIDADE • CONVERSÃO • VELOCIDADE • DESIGN • AUTORIDADE •
        </div>
      </div>
    </section>
  );
};