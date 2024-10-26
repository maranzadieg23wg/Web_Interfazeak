/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        noto: ['Noto Sans', 'sans-serif'],
      },
      colors: {
        'ezker': '#1c1c1e',
        'aukeratuta': "#2b2b2d",
      },
    },
  },
  plugins: [],
}

