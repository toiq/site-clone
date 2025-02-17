import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#161b2c",
        secondary: "#808a9e",
        accent: "#006ff9",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
} satisfies Config;
