import { Check } from 'lucide-react';

const Deliveries = () => {
  const deliveries = [
    "Site catálogo",
    "Link inteligente", 
    "Landing pages",
    "Campanhas (Meta)",
    "Automação via WhatsApp",
    "Gestão/qualificação de leads",
    "IA treinada",
    "Treinamento comercial",
    "Consultoria estratégica",
    "Painel de resultados",
    "Suporte técnico",
    "Base de dados de clientes como ativo"
  ];

  return (
    <section id="deliveries" className="py-24 bg-muted/30">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary">
              Entregas na prática
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para transformar sua operação comercial em um sistema de vendas digital organizado e eficiente.
            </p>
          </div>

          {/* Deliveries Grid */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliveries.map((delivery, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <Check size={14} className="text-success-foreground" />
                  </div>
                  <span className="text-card-foreground font-medium">{delivery}</span>
                </div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="mt-12 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground bg-accent/5 rounded-lg px-6 py-3 inline-block">
                <strong className="text-accent">Sem promessas, sem mágica.</strong> Com processo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliveries;