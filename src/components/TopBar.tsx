export default function TopBar() {
  return (
    <div className="bg-graphite text-gray-300 text-[0.82rem]">
      <div className="max-w-[1200px] mx-auto flex justify-between px-8 py-2">
        <span>Frete grátis para compras acima de R$ 199</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Rastrear pedido
          </a>
          <a href="#" className="hover:text-white">
            Ajuda
          </a>
        </div>
      </div>
    </div>
  );
}
