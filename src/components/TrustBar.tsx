const items = [
  { strong: "Frete grátis", rest: "acima de R$ 199" },
  { strong: "12x sem juros", rest: "no cartão" },
  { strong: "Troca grátis", rest: "em até 30 dias" },
  { strong: "Pagamento seguro", rest: "via Pix e cartão" },
];

export default function TrustBar() {
  return (
    <div className="border-y border-graphite/15 bg-paper-2">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between gap-4 px-8 py-4 text-[0.88rem] text-gray-600">
        {items.map((item) => (
          <span key={item.strong}>
            <strong className="text-graphite font-semibold">{item.strong}</strong> {item.rest}
          </span>
        ))}
      </div>
    </div>
  );
}
