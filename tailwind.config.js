/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'body': '#f3e7e9',
        'accent-body': '#dbb6bd',
        'black': '#0d0103',
        'accent-black': '#3d3435',
        'accent-black2': '#645d5d',
        'gray': '#c5c5c5',
        'gray-accent': '#989898',
        'primary': '#870D22',
        'accent': '#9f3d4e',
      }
    },
  },
  plugins: [],
}