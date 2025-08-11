import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Quero acelerar minha loja com o AutoScale Framework™. Pode me ajudar?");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const handleCTAClick = () => {
    window.open('https://autoscale.lampsi.com.br/', '_blank');
  };

  const navigation = [
    { name: 'O Método', href: 'method' },
    { name: 'Planos', href: 'plans' },
    { name: 'Como Funciona', href: 'how-it-works' },
    { name: 'FAQ', href: 'faq' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled 
        ? "bg-white/95 backdrop-blur-xl shadow-card border-b border-gray-200/50" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/fe222e00-8f5c-45fe-a0d2-dba4d07ddde7.png" 
              alt="AutoScale - Aceleradora de Vendas"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-semibold text-gray-700 hover:text-accent transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA - Single Button */}
          <div className="hidden lg:flex items-center">
            <Button 
              variant="cta" 
              size="sm"
              onClick={handleCTAClick}
              className="px-8"
            >
              Quero acelerar minha loja
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-card">
            <nav className="flex flex-col p-4 space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-accent transition-colors py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleWhatsAppClick}
                  className="w-full"
                >
                  Falar no WhatsApp
                </Button>
                <Button 
                  variant="cta" 
                  size="sm"
                  onClick={handleCTAClick}
                  className="w-full"
                >
                  Quero acelerar minha loja
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;