import { Code } from "lucide-react";
import { WHATSAPP_LINK } from "@/data/nicheModels";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg hidden sm:block">SitesPro</span>
          </a>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#modelos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Modelos
            </a>
            <a href="#precos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Preços
            </a>
            <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Como Funciona
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </a>
          </nav>
          
          {/* CTA */}
          <a 
            href="#modelos" 
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Ver Modelos
          </a>
        </div>
      </div>
    </header>
  );
};
