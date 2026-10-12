import React from 'react';
import { Quote } from 'lucide-react';

export const Pitch: React.FC = () => {
    return (
        <section className="py-24 bg-dark relative overflow-hidden border-b-4 border-white">
            {/* Decorative typography in background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter whitespace-nowrap">
                AQUISIÇÃO • LOCAL
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
                                “Hoje, quando alguém procura pelo seu serviço no Google, <span className="text-neon bg-neon/10 px-2">quem aparece primeiro recebe a ligação.</span>”
                            </p>

                            <div className="h-px w-full bg-white/10"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                                <div className="space-y-6">
                                    <p className="text-lg text-gray-300 font-mono leading-relaxed">
                                        A <span className="text-white font-bold">Vexis Agency</span> resolve isso de ponta a ponta: colocamos sua empresa no Google Maps do jeito certo e criamos uma landing page focada em converter essa busca em contato no WhatsApp.
                                    </p>
                                    <p className="text-xl font-bold uppercase text-neon tracking-wider border-l-4 border-neon pl-4">
                                        Não é site bonito, é estrutura de aquisição local.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-lg text-gray-300 font-mono leading-relaxed">
                                        O cliente pesquisa, clica, confia e chama. Nós cuidamos da parte técnica, você cuida do atendimento.
                                    </p>
                                    <p className="text-lg text-white font-bold uppercase">
                                        Em poucos dias, sua presença local deixa de ser invisível e começa a trabalhar por você.
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
