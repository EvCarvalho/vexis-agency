import React from 'react';
import { ShieldCheck, Zap, TrendingUp, Code2 } from 'lucide-react';

export const Authority: React.FC = () => {
  const items = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Desenvolvimento Pro",
      desc: "Código limpo, React + Tailwind."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Entrega Rápida",
      desc: "Seu site no ar em até 72h após pagamento e confirmação do layout."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Foco em Conversão",
      desc: "Copy e layout para vender."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Design Exclusivo",
      desc: "Estética brutalista futurista."
    },
  ];

  return (
    <section className="border-b-4 border-white bg-surface">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`
              p-8 border-b md:border-b-0 border-white/20 
              ${index !== items.length - 1 ? 'lg:border-r border-white/20' : ''}
              hover:bg-white hover:text-black transition-colors duration-300 group cursor-default
            `}
          >
            <div className="text-neon group-hover:text-black mb-4 transition-colors">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold uppercase mb-2 font-sans tracking-tight">{item.title}</h3>
            <p className="text-sm font-mono text-gray-400 group-hover:text-black/70">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};