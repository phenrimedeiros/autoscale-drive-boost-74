import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import heroShowroom from '@/assets/hero-showroom.jpg';
import dashboardMockup from '@/assets/dashboard-mockup.jpg';

const Hero = () => {
  const handleCTAClick = () => {
    window.open('https://autoscale.lampsi.com.br/', '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Quero acelerar minha loja com o AutoScale Framework™. Pode me ajudar?");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const trustElements = [
    "Método proprietário (VRD™)",
    "Respostas em até 24h",
    "Suporte contínuo"
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-hero pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold font-poppins text-primary leading-[1.1]">
                Venda Carros Todos os Dias com um{' '}
                <span className="text-accent bg-gradient-accent bg-clip-text text-transparent">Projeto</span> que Organiza sua{' '}
                <span className="text-accent bg-gradient-accent bg-clip-text text-transparent">Operação Comercial</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 font-inter leading-relaxed max-w-2xl">
                A AutoScale monta sua estrutura digital, ativa campanhas, automatiza o WhatsApp com IA e treina sua equipe — para sua loja vender com processo, não por sorte.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                variant="cta" 
                size="xl"
                onClick={handleCTAClick}
                className="flex-1 sm:flex-none text-lg px-12 py-6 shadow-hero hover:shadow-glow transform hover:scale-105 transition-all duration-300"
              >
                Quero acelerar minha loja
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={handleWhatsAppClick}
                className="flex-1 sm:flex-none text-lg px-8 py-6 border-2 border-primary/20 hover:border-accent hover:bg-accent/5 transition-all duration-300"
              >
                Falar no WhatsApp
              </Button>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-gray-200">
              {trustElements.map((element, index) => (
                <div key={index} className="flex items-center gap-3 text-base text-gray-600">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check size={14} className="text-accent flex-shrink-0" />
                  </div>
                  <span className="font-medium">{element}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-3xl overflow-hidden shadow-hero">
              <img 
                src={heroShowroom} 
                alt="Loja de carros moderna com estrutura digital"
                className="w-full h-[450px] lg:h-[550px] object-cover"
              />
              
              {/* Modern overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10"></div>
              
              {/* Floating Dashboard */}
              <div className="absolute -bottom-8 -left-8 w-72 h-44 rounded-2xl overflow-hidden shadow-card border border-white/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
                <img 
                  src={dashboardMockup}
                  alt="Dashboard de gestão de leads"
                  className="w-full h-full object-cover relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-accent/5"></div>
              </div>
              
              {/* Floating metrics */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-card border border-white/20">
                <div className="text-sm font-semibold text-primary">Vendas este mês</div>
                <div className="text-2xl font-bold text-accent">+127%</div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-5 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;