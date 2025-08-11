import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

const PricingPlans = () => {
  const handleCTAClick = (plan: string) => {
    if (plan === 'ideal') {
      window.open('https://autoscale.lampsi.com.br/', '_blank');
    } else {
      const message = encodeURIComponent(`Olá! Tenho interesse no Plano ${plan}. Pode me enviar mais detalhes?`);
      window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
    }
  };

  const plans = [
    {
      id: 'start',
      name: 'Start',
      subtitle: 'Comece Vendendo Hoje',
      price: 'R$ 1.997',
      monthly: 'R$ 997/mês',
      description: 'Para quem precisa iniciar com o essencial validado.',
      features: [
        'Site catálogo com showroom',
        'Link inteligente (Instagram/WhatsApp)',
        '1 landing page',
        'Campanha essencial',
        'Relatório quinzenal'
      ],
      highlighted: false,
      ctaText: 'Começar com Start'
    },
    {
      id: 'ideal',
      name: 'Ideal',
      subtitle: 'Aceleração Comercial Completa',
      price: 'R$ 2.997',
      monthly: 'R$ 1.997/mês',
      description: 'Para quem busca resultado rápido com automação e suporte estratégico.',
      features: [
        'Tudo do Start',
        'IA no WhatsApp',
        'Automação de follow-up',
        'CRM + dashboard',
        'Treinamento comercial',
        'Consultoria mensal',
        '2 campanhas otimizadas/mês'
      ],
      note: 'Resultados percebidos em até 24h (respostas/contatos)',
      highlighted: true,
      badge: 'Mais escolhido',
      ctaText: 'Quero acelerar com o Plano Ideal'
    },
    {
      id: 'expert',
      name: 'Expert',
      subtitle: 'Escala Rápida + Autoridade',
      price: 'R$ 4.997',
      monthly: 'R$ 2.997/mês',
      description: 'Para quem quer dominar o mercado local desde o início.',
      features: [
        'Tudo do Ideal',
        'Campanha Google',
        '+2 landing pages (consórcio, troca)',
        'Consultoria quinzenal',
        'Funil de nutrição e recuperação'
      ],
      highlighted: false,
      ctaText: 'Ver detalhes do Expert'
    }
  ];

  return (
    <section id="plans" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-8 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-primary leading-tight">
              Escolha como começar{' '}
              <span className="bg-gradient-accent bg-clip-text text-transparent">(recomendamos o Ideal)</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Todos os planos entregam estrutura + campanha no ar + leads chegando.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <div key={plan.id} className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-card border transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                plan.highlighted 
                  ? 'border-accent/30 shadow-accent/20 lg:scale-110 lg:-translate-y-4 bg-gradient-card' 
                  : 'border-gray-200/50 hover:border-accent/40'
              }`}>
                {/* Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-accent text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-glow">
                      <Star size={14} className="fill-current" />
                      Mais escolhido
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8 pt-4">
                  <div className="mb-4 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-2 ${
                      plan.id === 'start' ? 'bg-warning/10 border-2 border-warning/20' : 
                      plan.id === 'ideal' ? 'bg-gradient-accent border-2 border-accent/30' : 
                      'bg-primary/10 border-2 border-primary/20'
                    }`}>
                      {plan.id === 'start' ? '🚀' : plan.id === 'ideal' ? '⭐' : '👑'}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold font-poppins text-primary mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-lg font-medium text-gray-600 mb-6">
                    {plan.subtitle}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="text-4xl font-bold text-primary">
                      {plan.price}
                      <span className="text-base font-normal text-gray-500 ml-2">setup</span>
                    </div>
                    <div className="text-2xl font-bold text-accent">
                      {plan.monthly}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-center mb-8 text-lg leading-relaxed">
                  {plan.description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="text-accent" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Note */}
                {plan.note && (
                  <div className="mb-8 p-4 bg-gradient-accent/5 rounded-2xl border border-accent/20">
                    <p className="text-sm text-accent font-semibold">
                      💡 <strong>Destaque:</strong> {plan.note}
                    </p>
                  </div>
                )}

                {/* CTA */}
                <Button 
                  variant={plan.highlighted ? "cta" : "outline"}
                  size="lg"
                  onClick={() => handleCTAClick(plan.id)}
                  className={`w-full text-lg py-6 ${plan.highlighted ? 'shadow-glow' : ''}`}
                >
                  {plan.ctaText}
                </Button>
              </div>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div className="text-center space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-card border border-gray-200/50">
              <h3 className="text-2xl font-bold text-primary mb-4">Pronto para acelerar sua loja?</h3>
              <p className="text-gray-600 mb-6 text-lg">Comece hoje mesmo e veja os primeiros resultados em 24h</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="cta" 
                  size="xl"
                  onClick={() => handleCTAClick('ideal')}
                  className="text-lg px-12 py-6 shadow-glow"
                >
                  Quero acelerar com o Plano Ideal
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={() => handleCTAClick('details')}
                  className="text-lg px-8 py-6"
                >
                  Ver detalhes do Start e do Expert
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;