import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "@/data/nicheModels";

const plans = [
  {
    name: "Modelo Pronto por Nicho",
    price: "497",
    description: "Base profissional já desenvolvida para seu segmento",
    featured: false,
    features: [
      "Base profissional já desenvolvida",
      "Personalização com dados do cliente",
      "Site responsivo e moderno",
      "Otimizado para SEO básico",
      "Entrega em até 5 dias úteis",
      "1 rodada de ajustes incluída"
    ],
    cta: "Comprar Modelo – R$497",
    ctaVariant: "default" as const,
    linkType: "models"
  },
  {
    name: "Site Exclusivo Sob Medida",
    price: "797",
    description: "Projeto único criado especificamente para o seu negócio",
    featured: true,
    features: [
      "Estrutura criada especificamente para você",
      "Design exclusivo e personalizado",
      "Conteúdo e copy profissionais",
      "SEO avançado configurado",
      "Entrega em até 10 dias úteis",
      "2 rodadas de ajustes incluídas",
      "Consultoria de posicionamento"
    ],
    cta: "Solicitar Site Sob Medida – R$797",
    ctaVariant: "hero" as const,
    linkType: "whatsapp"
  }
];

export const PricingSection = () => {
  return (
    <section className="py-24 relative" id="precos">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Investimento</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Planos e <span className="text-gradient">Valores</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Escolha a opção ideal para sua necessidade. Ambos os planos incluem suporte e qualidade profissional.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                plan.featured 
                  ? 'shadow-hover' 
                  : 'glass-card'
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
              )}
              
              {/* Background for Featured */}
              {plan.featured && (
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
              )}
              
              <div className={`relative p-8 ${!plan.featured && 'bg-card'}`}>
                {/* Plan Badge */}
                {plan.featured && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                    <Sparkles className="w-4 h-4" />
                    Mais Popular
                  </div>
                )}
                
                {/* Plan Name */}
                <h3 className="font-display text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-5xl font-display font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">,00</span>
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                {plan.linkType === "models" ? (
                  <a href="#modelos">
                    <Button 
                      variant={plan.ctaVariant} 
                      size="lg" 
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </a>
                ) : (
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant={plan.ctaVariant} 
                      size="lg" 
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
