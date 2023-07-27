import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hina: "Hina Mincho, serif",
      },
    },
  },
  plugins: [
    require("prettier-plugin-organize-imports"),
    require("prettier-plugin-tailwindcss"),
  ],
} satisfies Config;
