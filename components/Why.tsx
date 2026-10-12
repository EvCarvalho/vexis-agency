import React from 'react';
import { BrutalButton } from './ui/BrutalButton';

export const Why: React.FC = () => {
  return (
    <section className="py-20 border-b-4 border-white bg-neon text-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              POR QUE ESCOLHER A <br />
              <span className="text-white bg-black px-2">VEXIS AGENCY?</span>
            </h2>
          </div>

          <div className="lg:w-1/2 font-mono space-y-6 text-lg md:text-xl font-bold">
            <p className="border-l-4 border-black pl-6">
              O Instagram não é suficiente. O Linktree é amador.
              Para vender de verdade, você precisa de um ambiente controlado.
            </p>
            <p>
              Uma Landing Page elimina distrações. O cliente entra e só tem uma saída: <span className="underline decoration-4">COMPRAR DE VOCÊ.</span>
            </p>
            <p>
              Autoridade instantânea. Design profissional. Velocidade.
              É a diferença entre um hobby e um negócio.
            </p>

            <div className="pt-6">
              <BrutalButton variant="secondary">
                QUERO PROFISSIONALIZAR
              </BrutalButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};