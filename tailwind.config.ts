import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background1: "hsl(var(--background1) / <alpha-value>)",
        background2: "hsl(var(--background2) / <alpha-value>)",
        dark: "rgb(var(--dark) / <alpha-value>)",
        opposite: "rgb(var(--opposite) / <alpha-value>)",
        medium: "hsl(var(--medium) / <alpha-value>)",
        text: "hsl(var(--text) / <alpha-value>)",
        text2: "hsl(var(--text2) / <alpha-value>)",
        alert: "hsl(var(--alert) / <alpha-value>)",
        footer: "var(--footer)",
      },
      backgroundImage: {
        gradient: "var(--gradient)",
      },
    },
  },
  plugins: [],
};
export default config;
