# Pista — Landing Page

Landing page demonstrativa da marca **Pista** (artigos esportivos), em React + TypeScript + Tailwind CSS, usando Vite.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```
pista-app/
├── index.html              # HTML raiz (importa as fontes Barlow Condensed + Inter)
├── tailwind.config.ts       # Cores da marca (graphite, paper, cobalt, gold)
├── src/
│   ├── main.tsx             # Ponto de entrada do React
│   ├── App.tsx              # Monta a página juntando as seções
│   ├── index.css            # Diretivas do Tailwind
│   ├── components/
│   │   ├── TopBar.tsx        # Barra de aviso (frete grátis, rastreio)
│   │   ├── Header.tsx        # Navegação fixa no topo
│   │   ├── Hero.tsx          # Seção principal com CTA
│   │   ├── TrustBar.tsx      # Frete, parcelamento, troca, pagamento
│   │   ├── Categories.tsx    # Grade de categorias
│   │   ├── Products.tsx      # Produtos em destaque
│   │   ├── Promo.tsx         # Banner de promoção
│   │   ├── Benefits.tsx      # Por que comprar na Pista
│   │   ├── Newsletter.tsx    # Captura de e-mail
│   │   └── Footer.tsx        # Rodapé
│   └── data/
│       ├── categories.ts     # Lista de categorias (edite aqui para trocar)
│       └── products.ts       # Lista de produtos (edite aqui para trocar)
```

## Próximos passos sugeridos

- Trocar os ícones SVG dos produtos por fotos reais (pasta `public/`).
- Conectar o formulário em `Newsletter.tsx` a um provedor de e-mail (Mailchimp, Resend, etc).
- Ligar os links de categoria/produto a páginas ou rotas reais (ex: `react-router-dom`).
- Ajustar cores de marca em `tailwind.config.ts` se quiser variar a identidade visual.
"# bsteste" 
