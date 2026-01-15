import { Scale, Heart, Smile, Building, Dumbbell, Brain, Calculator, Palette, Car, Sparkles, Award, Cpu, UtensilsCrossed, ShoppingBag, LucideIcon } from "lucide-react";

export interface NicheModel {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  previewUrl: string;
  price: number;
}

export const nicheModels: NicheModel[] = [
  {
    id: "advocacia",
    title: "Advocacia",
    description: "Site profissional para escritórios de advocacia e advogados autônomos",
    icon: Scale,
    color: "from-blue-500 to-blue-700",
    previewUrl: "https://advocacia-mod1.landroneia.com",
    price: 497
  },
  {
    id: "clinica-medica",
    title: "Clínica Médica",
    description: "Plataforma moderna para clínicas e consultórios médicos",
    icon: Heart,
    color: "from-red-500 to-rose-700",
    previewUrl: "https://clinicas-mod1.landroneia.com",
    price: 497
  },
  {
    id: "odontologia",
    title: "Odontologia",
    description: "Site elegante para dentistas e clínicas odontológicas",
    icon: Smile,
    color: "from-cyan-400 to-cyan-600",
    previewUrl: "https://odontologia-mod1.landroneia.com",
    price: 497
  },
  {
    id: "imobiliaria",
    title: "Imobiliária",
    description: "Portal completo para imobiliárias e corretores de imóveis",
    icon: Building,
    color: "from-amber-500 to-orange-600",
    previewUrl: "https://imobiliaria-mod1.landroneia.com",
    price: 497
  },
  {
    id: "personal-trainer",
    title: "Personal Trainer / Academia",
    description: "Site dinâmico para academias e personal trainers",
    icon: Dumbbell,
    color: "from-green-500 to-emerald-600",
    previewUrl: "https://academis-mod1.landroneia.com",
    price: 497
  },
  {
    id: "psicologia",
    title: "Psicologia / Terapia",
    description: "Ambiente acolhedor para psicólogos e terapeutas",
    icon: Brain,
    color: "from-purple-500 to-violet-600",
    previewUrl: "https://psicologos-mod1.landroneia.com",
    price: 497
  },
  {
    id: "contabilidade",
    title: "Contabilidade",
    description: "Site profissional para escritórios contábeis",
    icon: Calculator,
    color: "from-slate-500 to-slate-700",
    previewUrl: "https://contabilidade-mod1.landroneia.com",
    price: 497
  },
  {
    id: "arquitetura",
    title: "Arquitetura / Design de Interiores",
    description: "Portfólio elegante para arquitetos e designers",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    previewUrl: "https://arquitetura-mod1.landroneia.com",
    price: 497
  },
  {
    id: "mecanica",
    title: "Mecânica / Auto Center",
    description: "Site robusto para mecânicas e auto centers",
    icon: Car,
    color: "from-zinc-500 to-zinc-700",
    previewUrl: "https://mecanica-mod1.landroneia.com",
    price: 497
  },
  {
    id: "salao-beleza",
    title: "Salão de Beleza / Estética",
    description: "Site sofisticado para salões e clínicas de estética",
    icon: Sparkles,
    color: "from-fuchsia-500 to-pink-600",
    previewUrl: "https://salao-mod1.landroneia.com",
    price: 497
  },
  {
    id: "mentor-coach",
    title: "Mentor / Coach / Produtor Digital",
    description: "Página de alta conversão para mentores e coaches",
    icon: Award,
    color: "from-yellow-500 to-amber-600",
    previewUrl: "https://mentoria-mod1.landroneia.com",
    price: 497
  },
  {
    id: "tecnologia",
    title: "Tecnologia / Startup",
    description: "Site inovador para startups e empresas de tecnologia",
    icon: Cpu,
    color: "from-teal-500 to-cyan-600",
    previewUrl: "https://tecnologia-mod1.landroneia.com",
    price: 497
  },
  {
    id: "restaurantes",
    title: "Lanchonetes & Restaurantes",
    description: "Site apetitoso para restaurantes e lanchonetes",
    icon: UtensilsCrossed,
    color: "from-orange-500 to-red-600",
    previewUrl: "https://restaurante-mod1.landroneia.com",
    price: 497
  },
  {
    id: "lojistas",
    title: "Lojistas / Comércio em Geral",
    description: "Vitrine digital para lojas e comércios variados",
    icon: ShoppingBag,
    color: "from-indigo-500 to-blue-600",
    previewUrl: "https://lojas-mod1.landroneia.com",
    price: 497
  }
];

export const WHATSAPP_NUMBER = "5541999962535";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os modelos de sites.`;
export const PIX_KEY = "lanich2014@gmail.com";
