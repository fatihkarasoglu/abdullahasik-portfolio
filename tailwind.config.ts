import type { Config } from "tailwindcss";
import lineClamp from "@tailwindcss/line-clamp";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [lineClamp],
  darkMode: "class",
} satisfies Config;
