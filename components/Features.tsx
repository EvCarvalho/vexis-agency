import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Layout, Globe, Server, Smartphone, PenTool, Rocket } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      title: "Design Full Landing Page",
      desc: "Layout agressivo e moderno focado no seu produto.",
      icon: <Layout className="w-10 h-10" />
    },
    {
      title: "Copywriting Estratégico",
      desc: "Textos persuasivos que conduzem o cliente à compra.",
      icon: <PenTool className="w-10 h-10" />
    },
    {
      title: "Responsividade Total",
      desc: "Perfeito no celular, tablet e desktop. Sem quebrar.",
      icon: <Smartphone className="w-10 h-10" />
    },
    {
      title: "Domínio Grátis (1 Ano)",
      desc: "Incluso domínio .com.br. Para .com, consulte condições no WhatsApp.",
      icon: <Globe className="w-10 h-10" />
    },
    {
      title: "Hospedagem Grátis (1 Ano)",
      desc: "Servidor rápido e seguro incluso no pacote.",
      icon: <Server className="w-10 h-10" />
    },
    {
      title: "Entrega Express",
      desc: "Projeto finalizado e entregue em até 3 dias úteis após aprovação do layout e pagamento.",
      icon: <Rocket className="w-10 h-10" />
    },
  ];

  return (
    <section id="features" className="py-24 bg-dark relative border-b-4 border-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="O QUE ESTÁ INCLUÍDO" 
          subtitle="PACOTE COMPLETO"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="relative p-8 border-2 border-white/20 bg-surface hover:border-neon hover:shadow-brutal transition-all duration-300 group"
            >
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                <span className="font-mono text-4xl font-bold text-neon">0{idx + 1}</span>
              </div>
              
              <div className="mb-6 text-white group-hover:text-neon transition-colors">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold uppercase mb-4 text-white">
                {feature.title}
              </h3>
              
              <p className="font-mono text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};