/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        grass: "#8ed462",
        night: "#1e201b",
        cream: "#f5f1e4",
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
