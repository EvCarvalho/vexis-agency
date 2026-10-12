import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { MessageCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ricardo Silva",
      role: "Personal Trainer",
      text: "A página ficou insana. Vendi 3x mais consultorias na primeira semana. O design agressivo chamou muita atenção."
    },
    {
      name: "Ana Costa",
      role: "E-commerce",
      text: "Eu precisava de algo rápido. Em 2 dias estava no ar com domínio configurado. O suporte foi excelente."
    },
    {
      name: "Felipe Tech",
      role: "Startup Founder",
      text: "Brutalismo puro. Exatamente o que eu queria para diferenciar minha marca dos concorrentes genéricos."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-surface border-b-4 border-white relative overflow-hidden">
       {/* Decorative BG */}
       <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <MessageCircle size={300} />
       </div>

      <div className="container mx-auto px-4">
        <SectionHeading title="QUEM JÁ COMPROU" subtitle="FEEDBACK REAL" />

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          {testimonials.map((t, i) => (
            <div key={i} className="flex-1 bg-dark border-2 border-white/30 p-8 relative">
              <div className="text-neon text-6xl font-serif absolute -top-6 left-4">"</div>
              <p className="text-lg text-gray-200 italic font-mono mb-8 relative z-10 pt-4">
                {t.text}
              </p>
              <div className="border-t border-white/20 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold uppercase text-white">{t.name}</h4>
                  <span className="text-xs text-neon font-mono uppercase">{t.role}</span>
                </div>
                <div className="flex gap-1">
                   {[1,2,3,4,5].map(star => (
                     <div key={star} className="w-1 h-4 bg-neon transform skew-x-12" />
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};