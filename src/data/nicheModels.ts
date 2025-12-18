import { Scale, Heart, Smile, Building, Dumbbell, Brain, Calculator, Palette, Car, Sparkles, Award, Cpu, UtensilsCrossed, ShoppingBag, LucideIcon } from "lucide-react";

export interface NicheModel {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const nicheModels: NicheModel[] = [
  {
    id: "advocacia",
    title: "Advocacia",
    description: "Site profissional para escritórios de advocacia e advogados autônomos",
    icon: Scale,
    color: "from-blue-500 to-blue-700"
  },
  {
    id: "clinica-medica",
    title: "Clínica Médica",
    description: "Plataforma moderna para clínicas e consultórios médicos",
    icon: Heart,
    color: "from-red-500 to-rose-700"
  },
  {
    id: "odontologia",
    title: "Odontologia",
    description: "Site elegante para dentistas e clínicas odontológicas",
    icon: Smile,
    color: "from-cyan-400 to-cyan-600"
  },
  {
    id: "imobiliaria",
    title: "Imobiliária",
    description: "Portal completo para imobiliárias e corretores de imóveis",
    icon: Building,
    color: "from-amber-500 to-orange-600"
  },
  {
    id: "personal-trainer",
    title: "Personal Trainer / Academia",
    description: "Site dinâmico para academias e personal trainers",
    icon: Dumbbell,
    color: "from-green-500 to-emerald-600"
  },
  {
    id: "psicologia",
    title: "Psicologia / Terapia",
    description: "Ambiente acolhedor para psicólogos e terapeutas",
    icon: Brain,
    color: "from-purple-500 to-violet-600"
  },
  {
    id: "contabilidade",
    title: "Contabilidade",
    description: "Site profissional para escritórios contábeis",
    icon: Calculator,
    color: "from-slate-500 to-slate-700"
  },
  {
    id: "arquitetura",
    title: "Arquitetura / Design de Interiores",
    description: "Portfólio elegante para arquitetos e designers",
    icon: Palette,
    color: "from-pink-500 to-rose-600"
  },
  {
    id: "mecanica",
    title: "Mecânica / Auto Center",
    description: "Site robusto para mecânicas e auto centers",
    icon: Car,
    color: "from-zinc-500 to-zinc-700"
  },
  {
    id: "salao-beleza",
    title: "Salão de Beleza / Estética",
    description: "Site sofisticado para salões e clínicas de estética",
    icon: Sparkles,
    color: "from-fuchsia-500 to-pink-600"
  },
  {
    id: "mentor-coach",
    title: "Mentor / Coach / Produtor Digital",
    description: "Página de alta conversão para mentores e coaches",
    icon: Award,
    color: "from-yellow-500 to-amber-600"
  },
  {
    id: "tecnologia",
    title: "Tecnologia / Startup",
    description: "Site inovador para startups e empresas de tecnologia",
    icon: Cpu,
    color: "from-teal-500 to-cyan-600"
  },
  {
    id: "restaurantes",
    title: "Lanchonetes & Restaurantes",
    description: "Site apetitoso para restaurantes e lanchonetes",
    icon: UtensilsCrossed,
    color: "from-orange-500 to-red-600"
  },
  {
    id: "lojistas",
    title: "Lojistas / Comércio em Geral",
    description: "Vitrine digital para lojas e comércios variados",
    icon: ShoppingBag,
    color: "from-indigo-500 to-blue-600"
  }
];
