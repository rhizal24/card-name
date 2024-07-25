/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      colors:{
        ig:'#E4405F',
      },
    },
  },
  plugins: [],
};
