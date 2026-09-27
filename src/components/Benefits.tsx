const benefits = [
  {
    title: "Troca fácil",
    text: "30 dias para trocar ou devolver, sem burocracia.",
    path: "M21 12a9 9 0 1 1-6.219-8.56 M21 3v6h-6",
  },
  {
    title: "Frete rápido",
    text: "Entrega expressa em 24h nas principais capitais.",
    path: "M3 12h13l-4-4m4 4-4 4 M16 5h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1",
  },
  {
    title: "Curadoria real",
    text: "Produtos testados por atletas e treinadores parceiros.",
    path: "M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z",
  },
  {
    title: "Parcelamento",
    text: "Até 12x sem juros no cartão, em todo o site.",
    path: "",
    rect: true,
  },
];

export default function Benefits() {
  return (
    <section id="vantagens" className="py-20">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="mb-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl">Por que comprar na Pista</h2>
          <p className="max-w-[34ch] text-gray-600 mt-1">O básico bem feito, sem enrolação.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-3.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth={1.8}
                className="shrink-0 w-6 h-6 stroke-cobalt"
              >
                {b.rect ? (
                  <>
                    <rect x="2" y="5" width="20" height="14" rx="1" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </>
                ) : (
                  <path d={b.path} />
                )}
              </svg>
              <div>
                <h4 className="font-semibold mb-1.5">{b.title}</h4>
                <p className="text-[0.88rem] text-gray-600">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
