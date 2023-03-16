/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light color pallette
        'body': '#f9edea',
        'accent-body': '#ecc9c0',
        'black': '#0d0103',
        'accent-black': '#3d3435',
        'accent-black2': '#645d5d',
        'gray': '#c5c5c5',
        'gray-accent': '#989898',
        'primary': '#bf4c2c',
        'accent': '#cc7056',

        // Dark color pallette
        'd-bg': '#0d1116',
        'd-bg-accent': '#161C23',
        'd-card': '#2d3339',
        'd-body': '#8b8e91',
        'd-accent-body': '#45494f',
        'd-white': '#e6e6e6',
        'd-accent-white': '#989898',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}