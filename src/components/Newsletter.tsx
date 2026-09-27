import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  function handleSubmit() {
    // Aqui entraria a chamada para o seu provedor de e-mail marketing.
    console.log("Inscrever e-mail:", email);
  }

  return (
    <section id="newsletter" className="bg-paper-2 border-t border-graphite/15">
      <div className="max-w-[1200px] mx-auto px-8 py-16 flex flex-wrap items-center justify-between gap-8">
        <div>
          <h2 className="font-display font-bold text-2xl md:text-3xl">Fique por dentro</h2>
          <p className="text-gray-600 mt-1.5 text-[0.92rem]">
            Lançamentos, promoções e dicas de treino direto no seu e-mail.
          </p>
        </div>
        <div className="flex gap-2.5 w-full sm:w-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            aria-label="Seu e-mail"
            className="w-full sm:w-64 bg-paper border border-graphite/15 px-4 py-3.5 text-[0.92rem]"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-graphite text-white font-semibold px-6 whitespace-nowrap"
          >
            Quero receber
          </button>
        </div>
      </div>
    </section>
  );
}
