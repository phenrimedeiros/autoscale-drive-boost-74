import { Zap, Cog, Users } from 'lucide-react';

const AutoScaleFramework = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary">
              Projeto completo: estrutura + processo + acompanhamento
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Diferente de quem vende apenas "anúncio", entregamos um sistema de vendas digital: site catálogo, landing pages, campanhas, IA no WhatsApp, CRM e consultoria para sua equipe vender mais todos os dias.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold font-poppins text-primary mb-4">
                Estrutura Digital
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Site com catálogo (showroom), landing page de captação e link inteligente para Instagram/WhatsApp.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Cog className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold font-poppins text-primary mb-4">
                Atração & Atendimento
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Campanhas que trazem interessados, IA no WhatsApp para responder rápido e CRM para organizar os leads.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold font-poppins text-primary mb-4">
                Acompanhamento & Consultoria
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Treinamento comercial, análise mensal e suporte contínuo para evoluir a operação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoScaleFramework;