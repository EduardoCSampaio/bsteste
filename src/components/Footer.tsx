const columns = [
  {
    title: "Categorias",
    links: ["Corrida", "Futebol", "Academia", "Trilha"],
  },
  {
    title: "Ajuda",
    links: ["Trocas e devoluções", "Frete e entrega", "Fale conosco"],
  },
  {
    title: "Empresa",
    links: ["Sobre a Pista", "Trabalhe conosco"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-graphite text-gray-400 pt-12 pb-7 text-[0.88rem]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-wrap justify-between gap-7 pb-8 border-b border-white/10 mb-6">
          <div className="font-display font-bold text-2xl text-paper">PISTA</div>

          <div className="flex flex-wrap gap-14">
            {columns.map((col) => (
              <div key={col.title}>
                <h5 className="font-display font-semibold text-paper mb-3">{col.title}</h5>
                {col.links.map((link) => (
                  <a key={link} href="#" className="block mb-2.5 hover:text-white">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2.5">
          <span>© 2026 Pista. Todos os direitos reservados.</span>
          <span>Landing page demonstrativa</span>
        </div>
      </div>
    </footer>
  );
}
