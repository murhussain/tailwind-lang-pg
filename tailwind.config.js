/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'body': '#f9edea',
        'accent-body': '#ecc9c0',
        'black': '#0d0103',
        'accent-black': '#3d3435',
        'accent-black2': '#645d5d',
        'gray': '#c5c5c5',
        'gray-accent': '#989898',
        'primary': '#bf4c2c',
        'accent': '#cc7056',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}