import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: { DEFAULT: "#14171c", 2: "#1f232b" },
        paper: { DEFAULT: "#f6f4ef", 2: "#eae6db" },
        cobalt: { DEFAULT: "#1c3f73", 2: "#274d8a" },
        gold: "#b9932f",
      },
      fontFamily: {
        display: ["'Barlow Condensed'", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
