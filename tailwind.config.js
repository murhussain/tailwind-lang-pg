/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'body': '#f6f6f6',
        'black': '#0d0103',
        'accent-black': '#3d3435',
        'hero-body': '#f3e7e9',
        'gray': '#c5c5c5',
        'gray-accent': '#989898',
        'primary': '#870D22',
      }
    },
  },
  plugins: [],
}