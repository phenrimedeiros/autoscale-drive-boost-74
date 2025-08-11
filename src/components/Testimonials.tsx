import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      location: "AutoShow Premium - São Paulo/SP", 
      text: "Em 3 semanas já tínhamos leads qualificados chegando todo dia. A IA no WhatsApp mudou completamente nossa operação - agora não perdemos mais nenhum contato.",
      rating: 5
    },
    {
      name: "Marina Santos",
      location: "Veículos Miranda - Rio de Janeiro/RJ",
      text: "O método VRD™ organizou nossa bagunça. Antes vendíamos por sorte, agora temos processo. Em 2 meses triplicamos os leads e a equipe está muito mais confiante.",
      rating: 5
    },
    {
      name: "João Oliveira", 
      location: "Multi Carros - Belo Horizonte/MG",
      text: "Impressionante como funciona. Site no ar, campanhas ativas e CRM organizando tudo em menos de 24h. O suporte é excepcional, sempre disponível.",
      rating: 5
    },
    {
      name: "Ana Paula Costa",
      location: "Costa Veículos - Porto Alegre/RS",
      text: "Finalmente um projeto completo, não só anúncio. A consultoria mensal nos ajuda a evoluir constantemente. Recomendo para qualquer loja que quer crescer.",
      rating: 5
    },
    {
      name: "Ricardo Mendes",
      location: "AutoCenter Mendes - Brasília/DF", 
      text: "A estrutura digital que montaram é impecável. Dashboard, automações, landing pages... tudo integrado. Nossa conversão melhorou 300% em 4 meses.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary">
              O que nossos clientes dizem
            </h2>
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
              <span className="text-sm font-medium text-accent">
                Operação digital de vendas, não promessa milagrosa
              </span>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-warning text-warning" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-card-foreground leading-relaxed mb-6 text-sm">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-primary text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-xs mt-1">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Junte-se a centenas de lojas que já transformaram suas vendas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://autoscale.lampsi.com.br/', '_blank')}
                className="bg-gradient-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300"
              >
                Quero acelerar minha loja
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;