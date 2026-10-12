import React from 'react';
import { Quote } from 'lucide-react';

export const Pitch: React.FC = () => {
    return (
        <section className="py-24 bg-dark relative overflow-hidden border-b-4 border-white">
            {/* Decorative typography in background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter whitespace-nowrap">
                ALTA • CONVERSÃO
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center mb-12">
                        <div className="w-16 h-1 border-t-4 border-neon"></div>
                    </div>

                    <div className="relative">
                        <Quote className="absolute -left-8 -top-8 w-16 h-16 text-neon/20 -z-10" />

                        <div className="space-y-8">
                            <p className="text-2xl md:text-4xl font-black uppercase leading-tight text-white italic">
                                “Hoje, o seu tráfego decide em 3 segundos se <span className="text-neon bg-neon/10 px-2">compra de você ou fecha a aba.</span>”
                            </p>

                            <div className="h-px w-full bg-white/10"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                                <div className="space-y-6">
                                    <p className="text-lg text-gray-300 font-mono leading-relaxed">
                                        A <span className="text-white font-bold">Vexis Agency</span> elimina o amadorismo e constrói ecossistemas de alta performance: arquitetura brutalista, velocidade extrema e copywriting focado em fechar vendas.
                                    </p>
                                    <p className="text-xl font-bold uppercase text-neon tracking-wider border-l-4 border-neon pl-4">
                                        Não é site vitrine. É máquina de conversão escalável.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-lg text-gray-300 font-mono leading-relaxed">
                                        Seja para infoprodutos, serviços de alto ticket, software ou marcas em expansão nacional e internacional: nós cuidamos da tecnologia e persuasão, você cuida das vendas.
                                    </p>
                                    <p className="text-lg text-white font-bold uppercase">
                                        Em poucos dias, sua marca ganha autoridade no mercado e começa a vender com consistência.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
