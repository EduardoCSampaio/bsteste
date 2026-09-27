export default function Promo() {
  return (
    <section className="bg-graphite text-white">
      <div className="max-w-[1200px] mx-auto px-8 py-14 flex flex-wrap items-center justify-between gap-8">
        <div>
          <h2 className="font-display font-bold text-3xl md:text-4xl max-w-[20ch]">Semana do futebol</h2>
          <p className="text-gray-400 mt-2 max-w-[40ch]">
            Até 50% de desconto em chuteiras, camisas e bolas selecionadas. Só até domingo.
          </p>
        </div>
        <a href="#" className="border border-white text-white font-semibold px-7 py-3.5 hover:bg-white hover:text-graphite">
          Aproveitar agora
        </a>
      </div>
    </section>
  );
}
