import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { nicheModels, PIX_KEY } from "@/data/nicheModels";
import { ArrowLeft, ShoppingCart, Check, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Cart() {
  const [searchParams] = useSearchParams();
  const modelId = searchParams.get("modelo");
  const { toast } = useToast();
  
  const selectedModel = nicheModels.find(m => m.id === modelId);
  
  const [formData, setFormData] = useState({
    nome: "",
    telefone: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nome && formData.telefone) {
      setIsSubmitted(true);
    }
  };

  const copyPixKey = () => {
    navigator.clipboard.writeText(PIX_KEY);
    setCopied(true);
    toast({
      title: "Chave PIX copiada!",
      description: "Cole no seu aplicativo de pagamento.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  if (!selectedModel) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Modelo não encontrado</h1>
          <Link to="/#modelos">
            <Button variant="hero">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Ver Modelos Disponíveis
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = selectedModel.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-border">
        <div className="container px-4 md:px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o site
          </Link>
        </div>
      </header>

      <main className="container px-4 md:px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Cart Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
              <ShoppingCart className="w-4 h-4 text-primary" />
              <span className="text-sm">Carrinho de Compras</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold">
              Finalizar <span className="text-gradient">Compra</span>
            </h1>
          </div>

          {/* Selected Model */}
          <div className="glass-card rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedModel.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold">{selectedModel.title}</h3>
                <p className="text-sm text-muted-foreground">{selectedModel.description}</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold">R${selectedModel.price}</span>
                <span className="text-muted-foreground">,00</span>
              </div>
            </div>
          </div>

          {!isSubmitted ? (
            /* Form */
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6">
              <h2 className="font-display text-xl font-bold mb-6">Seus Dados</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Digite seu nome completo"
                    required
                    className="mt-1.5"
                  />
                </div>
                
                <div>
                  <Label htmlFor="telefone">Telefone / WhatsApp</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    placeholder="(00) 00000-0000"
                    required
                    className="mt-1.5"
                  />
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-muted-foreground">Modelo Escolhido:</span>
                    <span className="font-medium">{selectedModel.title}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-bold">Total a Pagar:</span>
                    <span className="font-bold text-primary">R${selectedModel.price},00</span>
                  </div>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full mt-4">
                  Continuar para Pagamento
                </Button>
              </div>
            </form>
          ) : (
            /* Payment Info */
            <div className="glass-card rounded-2xl p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-display text-xl font-bold">Dados Confirmados!</h2>
                <p className="text-muted-foreground">Agora realize o pagamento via PIX</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Nome:</p>
                  <p className="font-medium">{formData.nome}</p>
                </div>

                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Telefone:</p>
                  <p className="font-medium">{formData.telefone}</p>
                </div>

                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Modelo:</p>
                  <p className="font-medium">{selectedModel.title}</p>
                </div>

                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-2">Valor Total:</p>
                  <p className="text-2xl font-bold text-primary">R${selectedModel.price},00</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-display font-bold mb-4 text-center">Pagamento via PIX</h3>
                  
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                    <p className="text-sm text-muted-foreground mb-2">Chave PIX (E-mail):</p>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 p-2 rounded bg-background text-sm font-mono">
                        {PIX_KEY}
                      </code>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={copyPixKey}
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground text-center mt-4">
                    Após o pagamento, envie o comprovante pelo WhatsApp para confirmar seu pedido.
                  </p>

                  <a 
                    href={`https://wa.me/5541999962535?text=Olá! Acabei de fazer o pedido do modelo ${selectedModel.title}. Segue meus dados:%0A%0ANome: ${formData.nome}%0ATelefone: ${formData.telefone}%0AModelo: ${selectedModel.title}%0AValor: R$${selectedModel.price},00`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="hero" size="lg" className="w-full mt-4">
                      Enviar Comprovante via WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
