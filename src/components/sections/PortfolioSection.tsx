import { Button } from "@/components/ui/button";
import { nicheModels, NicheModel } from "@/data/nicheModels";
import { ExternalLink, ShoppingCart } from "lucide-react";

const ModelCard = ({ model, index }: { model: NicheModel; index: number }) => {
  const Icon = model.icon;
  
  return (
    <div 
      className="group relative glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-hover hover:-translate-y-2"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Card Content */}
      <div className="relative p-6">
        {/* Icon & Title */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${model.color} flex items-center justify-center shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs font-medium text-muted-foreground bg-secondary/50 px-2 py-1 rounded-full">
            Modelo {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        
        <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">
          {model.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
          {model.description}
        </p>
        
        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-foreground">R$597</span>
          <span className="text-muted-foreground text-sm">,00</span>
        </div>
        
        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="glass" size="sm" className="flex-1 group/btn">
            <ExternalLink className="w-4 h-4" />
            Ver Modelo
          </Button>
          <Button variant="default" size="sm" className="flex-1 group/btn">
            <ShoppingCart className="w-4 h-4" />
            Comprar
          </Button>
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-5 blur-xl`} />
      </div>
    </div>
  );
};

export const PortfolioSection = () => {
  return (
    <section className="py-24 relative" id="modelos">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfólio Completo</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-gradient">14 Modelos</span> Profissionais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada modelo foi cuidadosamente desenvolvido para atender as necessidades específicas de cada nicho, 
            com design moderno e estrutura focada em conversão.
          </p>
        </div>
        
        {/* Models Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {nicheModels.map((model, index) => (
            <ModelCard key={model.id} model={model} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
