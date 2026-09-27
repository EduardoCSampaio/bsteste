export interface Product {
  name: string;
  kicker: string;
  tag?: string;
  priceOld?: string;
  priceNew: string;
  icon: "shoe" | "shirt" | "watch";
}

export const products: Product[] = [
  {
    name: "Tênis Velocity Pro",
    kicker: "Corrida · Unissex",
    tag: "Mais vendido",
    priceOld: "R$ 499",
    priceNew: "R$ 349",
    icon: "shoe",
  },
  {
    name: "Camiseta Dry Fit",
    kicker: "Academia · Masculino",
    tag: "Novo",
    priceNew: "R$ 89",
    icon: "shirt",
  },
  {
    name: "Relógio GPS Trail X1",
    kicker: "Trilha · Unissex",
    tag: "Edição limitada",
    priceOld: "R$ 899",
    priceNew: "R$ 699",
    icon: "watch",
  },
];
