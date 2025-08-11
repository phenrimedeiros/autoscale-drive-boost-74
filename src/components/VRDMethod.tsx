import { Eye, Target, Crown } from 'lucide-react';

const VRDMethod = () => {
  const phases = [
    {
      icon: Eye,
      title: "VISÃO",
      period: "Mês 1–2",
      description: "Montamos o ambiente digital e ativamos a primeira campanha em até 24h.",
      deliveries: [
        "Diagnóstico completo",
        "Site catálogo no ar",
        "Link na bio configurado",
        "IA básica funcionando",
        "Automação inicial",
        "Painel de leads ativo",
        "Treinamento inicial da equipe"
      ],
      gain: "Leads chegando e estrutura no ar"
    },
    {
      icon: Target,
      title: "RESULTADO",
      period: "Mês 3–4",
      description: "Automatizamos follow-ups, aceleramos atendimento e otimizamos campanhas.",
      deliveries: [
        "Automação de não respondidos",
        "IA aprimorada e personalizada",
        "Campanha segmentada ativa",
        "Remarketing configurado",
        "Testes A/B implementados",
        "Treinamento avançado",
        "Relatórios e reuniões mensais"
      ],
      gain: "Mais conversão com menos esforço"
    },
    {
      icon: Crown,
      title: "DOMÍNIO",
      period: "Mês 5–6",
      description: "Escala, autoridade local e expansão.",
      deliveries: [
        "Campanha institucional com prova social",
        "Estratégia de indicações",
        "Páginas por oferta específica",
        "Otimização final do catálogo",
        "Diagnóstico completo de 6 meses",
        "Plano de continuidade"
      ],
      gain: "Reputação sólida e base pronta para escalar"
    }
  ];

  return (
    <section id="method" className="py-24 bg-background">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary">
              Método <span className="text-accent">VRD™</span> — Visão • Resultado • Domínio
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Projeto de 6 meses com objetivos e entregas claras em cada fase. 
              Um método proprietário que transforma sua operação passo a passo.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-accent to-accent/30 rounded-full"></div>

            <div className="space-y-16">
              {phases.map((phase, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Content Card */}
                  <div className="flex-1 max-w-lg">
                    <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                          <phase.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold font-poppins text-primary">
                            {phase.title}
                          </h3>
                          <p className="text-sm text-accent font-medium">{phase.period}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {phase.description}
                      </p>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary">Entregas:</h4>
                        <ul className="space-y-2">
                          {phase.deliveries.map((delivery, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              {delivery}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
                          <p className="text-sm font-medium text-accent">
                            <strong>Ganho:</strong> {phase.gain}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden md:flex w-16 h-16 bg-accent rounded-full items-center justify-center shadow-lg relative z-10">
                    <span className="text-accent-foreground font-bold text-lg">{index + 1}</span>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 max-w-lg hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VRDMethod;