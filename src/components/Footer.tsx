import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Quero acelerar minha loja com o AutoScale Framework™. Pode me ajudar?");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navigation = [
    { name: 'Início', href: 'hero' },
    { name: 'O Método', href: 'method' },
    { name: 'Entregas', href: 'deliveries' },
    { name: 'Planos', href: 'plans' },
    { name: 'Como Funciona', href: 'how-it-works' },
    { name: 'Depoimentos', href: 'testimonials' },
    { name: 'FAQ', href: 'faq' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16 py-20">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/fe222e00-8f5c-45fe-a0d2-dba4d07ddde7.png" 
                alt="AutoScale - Aceleradora de Vendas"
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Tecnologia e Método para Vender Carros Todos os Dias
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MessageCircle size={18} className="text-accent flex-shrink-0" />
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp Principal
                </button>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span className="text-gray-300">contato@autoscale.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0" />
                <span className="text-gray-300">São Paulo, SP</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-accent flex-shrink-0" />
                <span className="text-gray-300">Seg-Sex: 9h às 18h</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold font-poppins mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold font-poppins mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AutoScale Startup. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              AutoScale Framework™ é uma marca registrada
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;