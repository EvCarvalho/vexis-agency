import React from 'react';
import { SectionHeading } from './ui/SectionHeading';

export const Portfolio: React.FC = () => {
  const projects = [
    { title: "QUANDO A DOR SE TORNA ENCONTRO", category: "Infoproduto", img: "quando_a_dor_se_torna_encontro.png", link: "https://quando-a-dor-se-torna-encontro.vercel.app/" },
    { title: "ESPAÇO MALDIVAS BRONZE", category: "Serviços", img: "espaco_maldivas.png", link: "https://studiomaldiva.vercel.app/" },
    { title: "ANDRÉ RIOS ADVOCACIA", category: "Lead Magnet", img: "andrerios.png", link: "https://andre-rios-advocacia.vercel.app/" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-dark border-b-4 border-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="TRABALHOS RECENTES" subtitle="PORTFOLIO" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target={project.link.startsWith('http') ? "_blank" : "_self"}
              rel={project.link.startsWith('http') ? "noopener noreferrer" : ""}
              className="group relative block"
            >
              {/* Brutalist Frame */}
              <div className="border-4 border-white bg-black p-2 relative z-10 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:shadow-[0_20px_40px_-15px_rgba(204,255,0,0.5)]">
                {/* Header Bar */}
                <div className="flex items-center justify-between border-b-2 border-white pb-2 mb-2 px-1">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-neon rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="font-mono text-xs text-white uppercase">{project.category}</span>
                </div>

                {/* Image */}
                <div className="overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                  <div className="absolute inset-0 bg-neon/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-multiply"></div>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-64 object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <div className="pt-4 pb-2 text-center">
                  <h3 className="text-xl font-bold uppercase text-white group-hover:text-neon transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Shadow Element */}
              <div className="absolute inset-0 border-4 border-neon bg-transparent z-0 translate-y-2 -translate-x-2 transition-transform duration-300 group-hover:translate-y-4 group-hover:-translate-x-4"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};