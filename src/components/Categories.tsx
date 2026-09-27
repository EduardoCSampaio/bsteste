import { categories } from "../data/categories";

export default function Categories() {
  return (
    <section id="categorias" className="py-20">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex justify-between items-end gap-5 mb-10">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl">Compre por categoria</h2>
            <p className="max-w-[34ch] text-gray-600 mt-1">O essencial para cada tipo de treino.</p>
          </div>
          <a href="#" className="text-[0.9rem] font-semibold underline underline-offset-4 whitespace-nowrap">
            Ver todas as categorias
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              className={`group relative aspect-[3/4] overflow-hidden flex items-end p-5 text-white bg-gradient-to-br ${cat.gradient}`}
            >
              <span className="relative font-display font-bold text-xl transition-transform group-hover:scale-105">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
