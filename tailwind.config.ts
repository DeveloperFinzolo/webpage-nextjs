import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0d7377",
          dark: "#0a5c5f",
          light: "#14a09e",
        },
        accent: "#c8f000",
        dark: "#1a1a1a",
        "dark-card": "#222222",
      },
      // fontFamily: {
      //   sans: ["var(--font-dm-sans)", "sans-serif"],
      //   display: ["var(--font-playfair)", "serif"],
      // },
      fontFamily: {
        sans: ["var(--font-raleway)", "sans-serif"],
        display: ["var(--font-raleway)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
