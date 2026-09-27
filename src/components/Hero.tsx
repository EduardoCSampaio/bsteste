import React from 'react';

export default function Hero() {
  return (
    <section className="bg-graphite text-paper relative overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-cobalt opacity-20 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Lado Esquerdo - Copywriting */}
        <div className="flex-1 text-center lg:text-left">
          <span className="text-gold font-sans font-bold tracking-wider uppercase text-sm mb-4 block">
            Nova Coleção 2026
          </span>
          {/* Usando a fonte Barlow Condensed (font-display) para impacto */}
          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight mb-6 uppercase">
            Supere seus <span className="text-cobalt">limites</span> nas pistas
          </h1>
          <p className="font-sans text-paper-2 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            Artigos esportivos de alta performance desenvolvidos para quem leva o esporte a sério. Design, tecnologia e conforto máximo para a sua rotina.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-gold text-graphite font-sans font-bold py-4 px-8 rounded-md hover:bg-yellow-500 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Comprar Agora
            </button>
            <button className="bg-transparent border border-paper text-paper font-sans font-bold py-4 px-8 rounded-md hover:bg-paper-2 hover:text-graphite transition-colors duration-300">
              Ver Catálogo
            </button>
          </div>
        </div>

        {/* Lado Direito - Imagem Hero */}
        <div className="flex-1 w-full relative">
          <div className="aspect-[4/3] bg-graphite-2 rounded-xl overflow-hidden shadow-2xl border border-paper/10 relative group">
            {/* Substitua o src pela sua imagem oficial da pasta public */}
            <img 
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop" 
              alt="Atleta correndo em uma pista" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}