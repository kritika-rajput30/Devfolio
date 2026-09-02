/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        grass: "#ffffff", // token name kept for stability
        night: "#181818",
        cream: "#ffffff",
        fog: "#8b8b8b",
        blush: "#e8b7c4",
        lav: "#cdbce6",
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
