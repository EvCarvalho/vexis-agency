import React from 'react';
import { Check, Flame, Star, Zap } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { BrutalButton } from './ui/BrutalButton';
import { WHATSAPP_LINK } from '../constants';

interface PackageProps {
    title: string;
    subtitle: string;
    price: string;
    originalPrice?: string;
    features: string[];
    isPopular?: boolean;
    ctaText: string;
    functionText: string;
    href?: string;
}

const PackageCard: React.FC<PackageProps> = ({
    title,
    subtitle,
    price,
    originalPrice,
    features,
    isPopular,
    ctaText,
    functionText,
    href
}) => (
    <div className={`relative p-8 border-4 ${isPopular ? 'border-neon shadow-[12px_12px_0px_0px_rgba(204,255,0,1)] z-10' : 'border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]'} bg-surface flex flex-col h-full transition-transform hover:-translate-y-2`}>
        {isPopular && (
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-neon text-black px-4 py-1 text-xs font-black uppercase flex items-center gap-2">
                <Flame className="w-4 h-4" /> Ouro / Mais Vendido
            </div>
        )}

        <div className="mb-8">
            <h3 className="text-3xl font-black uppercase mb-1">{title}</h3>
            <p className="text-gray-400 font-mono text-sm mb-4 leading-tight">{subtitle}</p>
            <div className="flex flex-col gap-0">
                {originalPrice && (
                    <span className="text-sm font-mono text-gray-500 line-through decoration-neon decoration-2">
                        {originalPrice}
                    </span>
                )}
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{price}</span>
                    <span className="text-gray-500 font-mono text-xs uppercase">/ único</span>
                </div>
            </div>
        </div>

        <div className="space-y-4 mb-8 flex-grow">
            {features.map((feature, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                    <Check className={`w-5 h-5 mt-0.5 shrink-0 ${isPopular ? 'text-neon' : 'text-white'}`} />
                    <span className="text-sm font-mono text-gray-300 leading-snug">{feature}</span>
                </div>
            ))}
        </div>

        <div className="mt-auto">
            <div className="mb-6 p-4 bg-black/40 border border-white/5 font-mono text-[10px] uppercase tracking-wider text-gray-400">
                <span className="text-neon block mb-1">Função:</span>
                {functionText}
            </div>
            <BrutalButton
                variant={isPopular ? 'primary' : 'outline'}
                fullWidth
                href={href}
            >
                {ctaText}
            </BrutalButton>
        </div>
    </div>
);

export const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-24 bg-dark relative border-b-4 border-white overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon/5 blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon/10 blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-4">
                <SectionHeading
                    title="INVISTA NO SEU NEGÓCIO"
                    subtitle="PLANOS E PREÇOS"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
                    <PackageCard
                        title="Start"
                        subtitle="Para quem ainda está invisível no Google."
                        price="R$ 259"
                        functionText="Porta de entrada para presença local."
                        features={[
                            "Criação / otimização do Google Maps",
                            "Verificação do perfil",
                            "Configuração completa (NAP, categorias, texto)",
                            "5 fotos otimizadas"
                        ]}
                        ctaText="Começar Agora"
                        href="https://wa.me/5521972265396?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Plano%20Start."
                    />

                    <PackageCard
                        title="Growth"
                        subtitle="Para quem já recebe visitas, mas não converte."
                        price="R$ 499"
                        originalPrice="R$ 999"
                        functionText="Resolver o gargalo de conversão online."
                        features={[
                            "Landing page profissional (1 página)",
                            "Copy orientada à conversão",
                            "CTA para WhatsApp",
                            "Integração com domínio/hospedagem"
                        ]}
                        ctaText="Aumentar Conversão"
                        href="https://wa.me/5521972265396?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Plano%20Growth."
                    />

                    <PackageCard
                        title="Local Pro"
                        subtitle="Aqui está o ouro. Aquisição completa de clientes."
                        price="R$ 699"
                        originalPrice="R$ 1.398"
                        isPopular={true}
                        functionText="Dominação local e aquisição constante."
                        features={[
                            "Google Maps otimizado",
                            "Landing page de alta conversão",
                            "Integração Maps → Landing → WhatsApp",
                            "Texto alinhado à busca local",
                            "Configuração de eventos básicos"
                        ]}
                        ctaText="Pegar o Ouro"
                        href="https://wa.me/5521972265396?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Plano%20Local%20Pro."
                    />
                </div>

                {/* Monthly Subscription Callout */}
                <div className="max-w-4xl mx-auto border-2 border-white/20 p-8 md:p-12 bg-surface/50 backdrop-blur-sm relative group overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Star className="w-32 h-32 text-neon" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-2">
                            <div className="inline-block px-3 py-1 bg-neon/10 border border-neon/30 text-neon text-[10px] font-bold uppercase tracking-widest mb-4">
                                Altamente Recomendado
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black uppercase mb-2">
                                Manutenção Local Pro
                            </h3>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 font-mono text-xs text-gray-400">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neon"></div> Atualizações Google Maps</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neon"></div> Posts mensais</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neon"></div> Resposta a avaliações</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neon"></div> Ajustes na landing</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neon"></div> Relatório simples</li>
                            </ul>
                        </div>
                        <div className="text-center md:text-right">
                            <div className="mb-4">
                                <span className="text-sm font-mono text-gray-500 block uppercase">Apenas</span>
                                <div className="flex flex-col">
                                    <span className="text-sm font-mono text-gray-500 line-through decoration-neon/60 decoration-2">
                                        R$ 196
                                    </span>
                                    <div>
                                        <span className="text-4xl font-black text-neon">R$ 98</span>
                                        <span className="text-sm font-mono text-gray-500 uppercase">/ mês</span>
                                    </div>
                                </div>
                            </div>
                            <a
                                href="https://wa.me/5521972265396?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Manuten%C3%A7%C3%A3o%20Mensal%20de%20R%24%2098."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block border-2 border-neon text-neon px-6 py-2 font-bold text-xs uppercase hover:bg-neon hover:text-black transition-all"
                            >
                                Saber Mais
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
