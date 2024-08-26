/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3182ce', // Ejemplo de color primario
        'very-dark-gray': '#050404',
        'dark-gray': '#161616',
        'light-gray': '#737373',
        'yellow': '#FCA311',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
  