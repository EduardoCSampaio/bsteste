export interface Category {
  name: string;
  href: string;
  gradient: string; // classes tailwind do gradiente de fundo
}

export const categories: Category[] = [
  { name: "Corrida", href: "#", gradient: "from-cobalt to-graphite" },
  { name: "Futebol", href: "#", gradient: "from-emerald-800 to-graphite" },
  { name: "Academia", href: "#", gradient: "from-rose-900 to-graphite" },
  { name: "Trilha & Outdoor", href: "#", gradient: "from-amber-800 to-graphite" },
];
