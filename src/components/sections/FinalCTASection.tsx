import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/data/nicheModels";

export const FinalCTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(222_30%_15%/0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(222_30%_15%/0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Comece Agora Mesmo</span>
          </div>
          
          {/* Headline */}
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Pronto para{" "}
            <span className="text-gradient">Transformar</span>{" "}
            Sua Presença Online?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Escolha o modelo ideal para seu nicho e tenha um site profissional no ar em poucos dias. 
            Sem complicação, sem espera.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#modelos">
              <Button variant="hero" size="xl" className="group">
                Escolher Meu Modelo de Site
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="heroOutline" size="xl" className="group">
                <MessageCircle className="w-5 h-5" />
                Falar com Especialista
              </Button>
            </a>
          </div>
          
          {/* Trust Note */}
          <p className="mt-8 text-sm text-muted-foreground">
            ✓ Sem compromisso • ✓ Resposta em até 24h • ✓ Atendimento personalizado
          </p>
        </div>
      </div>
    </section>
  );
};
