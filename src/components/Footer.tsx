import { Code, Mail, Phone, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg">SitesPro</span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Sites profissionais prontos para impulsionar seu negócio. 
              14 modelos de alta conversão para diferentes nichos.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>lanich2014@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(41) 99996-2535</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#modelos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Ver Modelos
                </a>
              </li>
              <li>
                <a href="#precos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5541999962535?text=Olá! Gostaria de saber mais sobre os modelos de sites."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>
          
          {/* Projects */}
          <div>
            <h4 className="font-display font-semibold mb-4">Nossos Projetos</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://lan-ia.lovable.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  LAN-IA <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://lanianova-futurista-hero.lovable.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  LAN-IA Nova <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 SitesPro. Todos os direitos reservados. Site feito por Luiz Nichele.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
