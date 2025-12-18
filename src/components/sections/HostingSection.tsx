import { Globe, Server, Shield, HeadphonesIcon } from "lucide-react";

export const HostingSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Infraestrutura</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
              Domínio e <span className="text-gradient">Hospedagem</span>
            </h2>
          </div>
          
          {/* Content */}
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Option 1 */}
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold">Use Seu Domínio</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conectamos o site ao seu domínio próprio (ex: suaempresa.com.br). 
                  Você mantém total controle sobre o endereço do seu negócio na web.
                </p>
              </div>
              
              {/* Option 2 */}
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Server className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold">Nossa Hospedagem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Opte por hospedar em nossa infraestrutura profissional, com taxa mensal 
                  de manutenção que inclui suporte técnico contínuo.
                </p>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="mt-12 pt-8 border-t border-border">
              <h4 className="font-semibold mb-6 text-center">Benefícios da Manutenção Mensal</h4>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h5 className="font-semibold mb-1">Segurança</h5>
                  <p className="text-sm text-muted-foreground">Certificado SSL e backups regulares</p>
                </div>
                <div className="text-center">
                  <HeadphonesIcon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h5 className="font-semibold mb-1">Suporte</h5>
                  <p className="text-sm text-muted-foreground">Atendimento técnico sempre disponível</p>
                </div>
                <div className="text-center">
                  <Server className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h5 className="font-semibold mb-1">Estabilidade</h5>
                  <p className="text-sm text-muted-foreground">Servidores de alta performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
