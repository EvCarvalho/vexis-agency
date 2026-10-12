import React from 'react';
import { EMAIL } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t-4 border-white text-center md:text-left">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Vexis Agency logo landing pages" className="h-8 w-8 object-contain" loading="lazy" />
            <h2 className="text-2xl font-black uppercase text-white tracking-tighter">
              VEXIS <span className="text-neon">AGENCY</span>
            </h2>
          </div>
          <p className="text-xs text-gray-500 font-mono mt-1">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 font-mono text-sm uppercase text-gray-400">
          <div className="flex flex-col md:items-end">
            <a href="https://wa.me/5521972265396" className="hover:text-neon transition-colors">(21) 97226-5396</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-neon transition-colors lowercase normal-case">{EMAIL}</a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neon transition-colors">Termos</a>
            <a href="#" className="hover:text-neon transition-colors">Privacidade</a>
          </div>
          <span className="text-white text-right">Atendemos Niterói, Rio de Janeiro</span>
        </div>
      </div>
    </footer>
  );
};