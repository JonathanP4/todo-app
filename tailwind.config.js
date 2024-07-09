/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: colors.transparent,
      white: colors.white,
      blue: "hsl(220deg 98% 61% / <alpha-value>)",
      aqua: "hsl(192deg 100% 67% / <alpha-value>)",
      purple: "hsl(280deg 87% 65% / <alpha-value>)",
      light: {
        100: "hsl(0deg 0% 98% / <alpha-value>)",
        200: "hsl(236deg 33% 92% / <alpha-value>)",
        300: "hsl(233deg 11% 84% / <alpha-value>)",
        500: "hsl(236deg 9% 61% / <alpha-value>)",
        600: "hsl(235deg 19% 35% / <alpha-value>)",
      },
      dark: {
        100: "hsl(236deg 33% 92% / <alpha-value>)",
        200: "hsl(234deg 39% 85% / <alpha-value>)",
        300: "hsl(234deg 11% 52% / <alpha-value>)",
        400: "hsl(233deg 14% 35% / <alpha-value>)",
        500: "hsl(237deg 14% 26% / <alpha-value>)",
        600: "hsl(235deg 24% 19% / <alpha-value>)",
        700: "hsl(235deg 21% 11% / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
