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
    previewUrl: "https://lovable.dev/projects/24c86631-6a4f-47af-898c-e25063a9d284",
    price: 597
  },
  {
    id: "clinica-medica",
    title: "Clínica Médica",
    description: "Plataforma moderna para clínicas e consultórios médicos",
    icon: Heart,
    color: "from-red-500 to-rose-700",
    previewUrl: "https://lovable.dev/projects/f71d8c7a-e64f-4278-9a5a-074c6f21dbc1",
    price: 597
  },
  {
    id: "odontologia",
    title: "Odontologia",
    description: "Site elegante para dentistas e clínicas odontológicas",
    icon: Smile,
    color: "from-cyan-400 to-cyan-600",
    previewUrl: "https://lovable.dev/projects/cbfab575-38fa-4748-b3ed-e2d599b1320b",
    price: 597
  },
  {
    id: "imobiliaria",
    title: "Imobiliária",
    description: "Portal completo para imobiliárias e corretores de imóveis",
    icon: Building,
    color: "from-amber-500 to-orange-600",
    previewUrl: "https://lovable.dev/projects/41b5c61e-272c-4f4c-82cb-77f2e7842fbd",
    price: 597
  },
  {
    id: "personal-trainer",
    title: "Personal Trainer / Academia",
    description: "Site dinâmico para academias e personal trainers",
    icon: Dumbbell,
    color: "from-green-500 to-emerald-600",
    previewUrl: "https://lovable.dev/projects/a79f13e6-3a6c-4088-8406-834f8b4952bf",
    price: 597
  },
  {
    id: "psicologia",
    title: "Psicologia / Terapia",
    description: "Ambiente acolhedor para psicólogos e terapeutas",
    icon: Brain,
    color: "from-purple-500 to-violet-600",
    previewUrl: "https://lovable.dev/projects/8a3f6ca1-232c-4835-9cc0-02352d72f4d4",
    price: 597
  },
  {
    id: "contabilidade",
    title: "Contabilidade",
    description: "Site profissional para escritórios contábeis",
    icon: Calculator,
    color: "from-slate-500 to-slate-700",
    previewUrl: "https://lovable.dev/projects/4b3b2fee-0199-48fd-bff7-2ff0e1bc0091",
    price: 597
  },
  {
    id: "arquitetura",
    title: "Arquitetura / Design de Interiores",
    description: "Portfólio elegante para arquitetos e designers",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    previewUrl: "https://lovable.dev/projects/3d4fa39f-150b-4588-9893-fbd55e6058c6",
    price: 597
  },
  {
    id: "mecanica",
    title: "Mecânica / Auto Center",
    description: "Site robusto para mecânicas e auto centers",
    icon: Car,
    color: "from-zinc-500 to-zinc-700",
    previewUrl: "https://lovable.dev/projects/26e387db-b76c-4964-a568-34dbf0f8e571",
    price: 597
  },
  {
    id: "salao-beleza",
    title: "Salão de Beleza / Estética",
    description: "Site sofisticado para salões e clínicas de estética",
    icon: Sparkles,
    color: "from-fuchsia-500 to-pink-600",
    previewUrl: "https://lovable.dev/projects/a79d59ec-256f-4178-85c1-3d19c5ea5f83",
    price: 597
  },
  {
    id: "mentor-coach",
    title: "Mentor / Coach / Produtor Digital",
    description: "Página de alta conversão para mentores e coaches",
    icon: Award,
    color: "from-yellow-500 to-amber-600",
    previewUrl: "https://lovable.dev/projects/1bd80502-5d57-4d22-b8e0-34c05648cffc",
    price: 597
  },
  {
    id: "tecnologia",
    title: "Tecnologia / Startup",
    description: "Site inovador para startups e empresas de tecnologia",
    icon: Cpu,
    color: "from-teal-500 to-cyan-600",
    previewUrl: "https://lovable.dev/projects/7a654b5f-a5f4-473d-af57-caaaf72bcbf4",
    price: 597
  },
  {
    id: "restaurantes",
    title: "Lanchonetes & Restaurantes",
    description: "Site apetitoso para restaurantes e lanchonetes",
    icon: UtensilsCrossed,
    color: "from-orange-500 to-red-600",
    previewUrl: "https://lovable.dev/projects/2a65dac0-4b07-4fa4-a56b-3ca28c94a947",
    price: 597
  },
  {
    id: "lojistas",
    title: "Lojistas / Comércio em Geral",
    description: "Vitrine digital para lojas e comércios variados",
    icon: ShoppingBag,
    color: "from-indigo-500 to-blue-600",
    previewUrl: "https://lovable.dev/projects/f8b985c7-3aea-4768-a7ac-8ddc9f35538e",
    price: 597
  }
];

export const WHATSAPP_NUMBER = "5541999962535";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os modelos de sites.`;
export const PIX_KEY = "lanich2014@gmail.com";
