/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'body': '#f6f6f6',
        'gray-accent': '#989898',
        'primary': '#870D22',
      }
    },
  },
  plugins: [],
}