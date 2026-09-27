import React from 'react';

// Substitua esse MOCK importando do seu arquivo real: 
// import { products } from '../data/products';
const MOCK_PRODUCTS = [
  { id: 1, name: 'Tênis Pista Pro V1', price: 699.90, tag: 'Lançamento', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop' },
  { id: 2, name: 'Camiseta DryFit Performance', price: 129.90, tag: 'Mais Vendido', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop' },
  { id: 3, name: 'Shorts de Compressão Elite', price: 159.90, tag: '', image: 'https://images.unsplash.com/photo-1591557304169-2f5bb41f4864?q=80&w=600&auto=format&fit=crop' },
  { id: 4, name: 'Mochila Esportiva Transit', price: 349.90, tag: '', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop' },
];

export default function Products() {
  return (
    <section className="bg-paper py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção de Produtos */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="font-display text-4xl text-graphite font-bold uppercase mb-2">
              Destaques da Pista
            </h2>
            <p className="font-sans text-graphite-2 opacity-80">
              Equipamentos testados e aprovados por atletas profissionais.
            </p>
          </div>
          <button className="font-sans text-cobalt font-semibold hover:text-cobalt-2 transition-colors flex items-center gap-1 group">
            Ver todos os produtos
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Grade (Grid) de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-paper-2 hover:-translate-y-1"
            >
              {/* Box da Imagem com Tag */}
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-2">
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-gold text-graphite font-sans font-bold text-xs uppercase px-3 py-1 rounded z-10 shadow-sm tracking-wide">
                    {product.tag}
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Informações de Compra */}
              <div className="p-5">
                <h3 className="font-sans font-semibold text-graphite text-lg mb-1 truncate">
                  {product.name}
                </h3>
                <p className="font-display font-bold text-2xl text-cobalt mb-5">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
                
                <button className="w-full bg-graphite text-paper font-sans font-bold py-3 rounded hover:bg-cobalt transition-colors duration-300">
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}