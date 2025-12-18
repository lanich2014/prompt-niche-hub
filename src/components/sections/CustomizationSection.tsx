import { Check, Palette, FileText, Image, Layout } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Cores e Identidade Visual",
    description: "Adaptamos todo o esquema de cores para combinar com a identidade da sua marca."
  },
  {
    icon: FileText,
    title: "Textos e Conteúdo",
    description: "Inserimos todos os textos, informações de contato e dados do seu negócio."
  },
  {
    icon: Image,
    title: "Imagens Personalizadas",
    description: "Substituímos imagens genéricas por fotos reais do seu negócio ou banco de imagens premium."
  },
  {
    icon: Layout,
    title: "Estrutura Adaptável",
    description: "Reorganizamos seções conforme suas prioridades e necessidades específicas."
  }
];

export const CustomizationSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent" />
      
      <div className="container px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Transparência Total</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
              Modelos Base,{" "}
              <span className="text-gradient">Totalmente Personalizáveis</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Todos os sites exibidos são modelos profissionais base. O conteúdo, cores, textos, 
              imagens e estrutura são completamente ajustados conforme a realidade e os objetivos 
              do seu negócio.
            </p>
            
            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="glass-card rounded-xl p-4 transition-all duration-300 hover:shadow-hover"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              
              <div className="relative space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                  <Check className="w-6 h-6 text-primary" />
                  <span className="font-medium">Design profissional e moderno</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                  <Check className="w-6 h-6 text-primary" />
                  <span className="font-medium">Estrutura focada em conversão</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                  <Check className="w-6 h-6 text-primary" />
                  <span className="font-medium">100% responsivo (mobile-first)</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                  <Check className="w-6 h-6 text-primary" />
                  <span className="font-medium">Otimizado para velocidade</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                  <Check className="w-6 h-6 text-primary" />
                  <span className="font-medium">SEO já configurado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
