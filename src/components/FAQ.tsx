import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Em quanto tempo começo a sentir resultado?",
      answer: "Em até 24h após a ativação da campanha você já recebe respostas/contatos de interessados."
    },
    {
      question: "Preciso ter equipe grande?",
      answer: "Não. Organizamos o atendimento com IA e CRM para sua equipe atual dar conta com mais eficiência."
    },
    {
      question: "Posso começar pequeno?",
      answer: "Sim. O Start entrega estrutura e leads. Recomendamos o Ideal pelo equilíbrio entre resultado e suporte."
    },
    {
      question: "Vocês só fazem anúncio?",
      answer: "Não. Montamos estrutura + processo + acompanhamento — um sistema completo de vendas digitais."
    },
    {
      question: "E se eu já tiver site?",
      answer: "Avaliamos, otimizamos e integramos ao nosso fluxo de captação, IA e CRM."
    },
    {
      question: "Como medimos sucesso?",
      answer: "Leads qualificados, velocidade de atendimento, taxa de resposta e vendas decorrentes do processo."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre o AutoScale Framework™
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-2xl border border-border shadow-sm">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-200 rounded-2xl"
                >
                  <h3 className="font-semibold text-primary pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                
                <div className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 p-8 bg-gradient-subtle rounded-2xl border border-border">
            <h3 className="text-xl font-semibold font-poppins text-primary mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Converse diretamente com nossa equipe e tire todas as suas dúvidas
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent("Olá! Tenho algumas dúvidas sobre o AutoScale Framework™. Podem me ajudar?");
                window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
              }}
              className="bg-success text-success-foreground px-6 py-3 rounded-lg font-semibold hover:bg-success/90 transition-colors"
            >
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;