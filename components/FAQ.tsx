import React from 'react';
import { SectionHeading } from './ui/SectionHeading';

export const FAQ: React.FC = () => {
    const faqs = [
        {
            question: "Qual o prazo de entrega?",
            answer: "O prazo médio é de 3 dias úteis após o recebimento de todas as informações e confirmação do pagamento."
        },
        {
            question: "O domínio e hospedagem são grátis mesmo?",
            answer: "Sim! Oferecemos 1 ano de domínio (.com.br) e hospedagem profissional incluídos no valor da sua Landing Page."
        },
        {
            question: "Vocês atendem clientes em qualquer região ou exterior?",
            answer: "Sim! Atendemos clientes em todo o Brasil e no exterior. Todo o nosso processo de desenvolvimento, alinhamento e suporte é 100% digital, ágil e transparente."
        },
        {
            question: "A Landing Page é otimizada para o Google?",
            answer: "Sim, todas as nossas páginas são construídas seguindo as melhores práticas de SEO on-page para ajudar no seu ranking."
        }
    ];

    // Schema FAQPage
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section id="faq" className="py-24 bg-dark border-b-4 border-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container mx-auto px-4">
                <SectionHeading title="DÚVIDAS FREQUENTES" subtitle="FAQ" />

                <div className="max-w-3xl mx-auto mt-12 space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-2 border-white/20 p-6 bg-surface hover:border-neon transition-colors group">
                            <h3 className="text-xl font-bold text-white mb-2 uppercase font-mono group-hover:text-neon">
                                {faq.question}
                            </h3>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
