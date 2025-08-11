import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const FinalCTA = () => {
  const handleCTAClick = () => {
    window.open('https://autoscale.lampsi.com.br/', '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Quero acelerar minha loja com o AutoScale Framework™. Pode me ajudar?");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const benefits = [
    "Estrutura publicada",
    "Campanhas ativas",
    "Atendimento com IA em funcionamento"
  ];

  return (
    <section className="py-24 bg-gradient-tech text-white">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins">
              Sua loja pronta para vender
              <span className="text-accent block mt-2">todos os dias</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Estrutura publicada, campanhas ativas e atendimento com IA em funcionamento.
            </p>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-gray-200 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="cta" 
              size="xl"
              onClick={handleCTAClick}
              className="group"
            >
              Quero acelerar minha loja
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={handleWhatsAppClick}
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Falar no WhatsApp
            </Button>
          </div>

          {/* Trust Line */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              Método proprietário (VRD™) • Respostas em até 24h • Suporte contínuo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;