/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    defaultTheme,
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        redux: {
          400: "#845dc3",
          500: "#764abc",
          600: "#5e399a",
        },
      },
    },
  },
  plugins: [],
};
