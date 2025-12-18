import { Zap, Paintbrush, Target, Clock, TrendingUp, DollarSign } from "lucide-react";

const differentials = [
  {
    icon: Paintbrush,
    title: "Design Moderno",
    description: "Visual contemporâneo e profissional que transmite credibilidade"
  },
  {
    icon: Target,
    title: "Foco em Conversão",
    description: "Estrutura estratégica para transformar visitantes em clientes"
  },
  {
    icon: Clock,
    title: "Agilidade na Entrega",
    description: "Seu site no ar em poucos dias, sem meses de espera"
  },
  {
    icon: TrendingUp,
    title: "Modelos Testados",
    description: "Layouts validados e otimizados para resultados reais"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Sites leves e rápidos, otimizados para carregamento"
  },
  {
    icon: DollarSign,
    title: "Custo-Benefício",
    description: "Qualidade profissional por uma fração do preço de mercado"
  }
];

export const DifferentialsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Por Que Escolher</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Nossos <span className="text-gradient">Diferenciais</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Entenda por que nossos modelos são a escolha certa para o seu negócio.
          </p>
        </div>
        
        {/* Differentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differentials.map((item, index) => (
            <div 
              key={item.title}
              className="group glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
