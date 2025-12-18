import { MousePointer, Palette, Globe } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MousePointer,
    title: "Escolha o Modelo",
    description: "Navegue por nossos 14 modelos profissionais e escolha o ideal para o seu nicho de atuação."
  },
  {
    number: "02",
    icon: Palette,
    title: "Personalizamos para Você",
    description: "Adaptamos cores, textos, imagens e estrutura com seus dados, identidade visual e objetivos."
  },
  {
    number: "03",
    icon: Globe,
    title: "Publicamos Online",
    description: "Publicamos no seu domínio próprio ou em nossa hospedagem profissional com suporte incluso."
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Processo Simples</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Como <span className="text-gradient">Funciona</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Em apenas 3 passos, seu site profissional estará no ar, pronto para converter visitantes em clientes.
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-hover hover:-translate-y-1">
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-display font-bold text-primary/20">{step.number}</span>
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
