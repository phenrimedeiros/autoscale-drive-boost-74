import { Search, Rocket, MessageSquare, Database, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Diagnóstico e Direção",
      description: "Entendemos sua operação e definimos metas claras"
    },
    {
      icon: Rocket,
      title: "Estrutura e Ativação",
      description: "Publicamos site, link, landing e ativamos campanhas"
    },
    {
      icon: MessageSquare,
      title: "Atendimento com IA",
      description: "WhatsApp responde rápido, filtra e organiza"
    },
    {
      icon: Database,
      title: "Gestão de Leads no CRM",
      description: "Nada se perde: follow-ups automáticos"
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento e Treino",
      description: "Reuniões, melhorias e evolução contínua"
    }
  ];

  const differentials = [
    "Resposta em até 24h",
    "Método proprietário",
    "Suporte contínuo",
    "Painel de resultados",
    "Base de clientes como ativo da loja"
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary">
              Como funciona na prática
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Um processo estruturado e transparente para transformar sua operação comercial em um sistema eficiente de vendas digitais.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Steps */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-6 group">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                        <step.icon className="w-8 h-8 text-accent" />
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-sm font-bold text-accent">0{index + 1}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl font-semibold font-poppins text-primary mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Connector Line */}
                      {index < steps.length - 1 && (
                        <div className="w-0.5 h-8 bg-border ml-8 mt-6"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Differentials Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border sticky top-8">
                <h3 className="text-xl font-semibold font-poppins text-primary mb-6 text-center">
                  Diferenciais
                </h3>
                
                <div className="space-y-4">
                  {differentials.map((differential, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg border border-accent/20">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium text-card-foreground">
                        {differential}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-gradient-accent rounded-lg text-center">
                  <p className="text-accent-foreground font-semibold text-sm">
                    Operação digital de vendas, não promessa milagrosa
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

export default HowItWorks;