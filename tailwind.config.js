/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        grass: "#f0a868", // warm apricot (token name kept for stability)
        night: "#2b2622", // warm charcoal (softer than hard black)
        cream: "#fffdf8", // bright warm off-white
        fog: "#a3a69e",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Inter Fallback",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },

  plugins: [require("daisyui")],
};
