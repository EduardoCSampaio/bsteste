export default function Header() {
  return (
    <header className="bg-paper border-b border-graphite/15 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-8 py-5">
        <div className="font-display font-bold text-2xl tracking-wide">PISTA</div>

        <ul className="hidden md:flex gap-8 text-[0.94rem] font-medium">
          <li>
            <a href="#categorias" className="border-b border-transparent hover:border-graphite pb-1">
              Categorias
            </a>
          </li>
          <li>
            <a href="#produtos" className="border-b border-transparent hover:border-graphite pb-1">
              Destaques
            </a>
          </li>
          <li>
            <a href="#vantagens" className="border-b border-transparent hover:border-graphite pb-1">
              Sobre a Pista
            </a>
          </li>
          <li>
            <a href="#newsletter" className="border-b border-transparent hover:border-graphite pb-1">
              Novidades
            </a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button aria-label="Buscar" className="p-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button aria-label="Carrinho" className="p-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
          <a href="#produtos" className="bg-cobalt text-white font-semibold px-6 py-3 text-[0.9rem]">
            Ver ofertas
          </a>
        </div>

        <button className="md:hidden border border-graphite/20 px-4 py-2 text-[0.85rem]">Menu</button>
      </div>
    </header>
  );
}
