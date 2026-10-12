import React from 'react';
import { BrutalButton } from './ui/BrutalButton';
import { WHATSAPP_LINK, EMAIL } from '../constants';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto border-4 border-neon bg-black/50 backdrop-blur-md p-8 md:p-16 shadow-[10px_10px_0px_0px_rgba(204,255,0,1)]">

          <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-6 leading-tight">
            Comece a vender <br />
            <span className="text-neon">Ainda esta semana</span>
          </h2>

          <p className="text-xl md:text-2xl font-mono text-gray-300 mb-8">
            Planos a partir de <span className="font-bold text-black bg-neon px-2 py-1">R$ 690</span>
          </p>

          <div className="flex justify-center">
            <BrutalButton variant="primary" fullWidth className="max-w-md text-xl py-6">
              Peça sua Landing em 3 Dias
            </BrutalButton>
          </div>

          <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-8">
            <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">
              Ou prefere e-mail?
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-white hover:text-neon transition-colors font-mono text-lg lowercase"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};