/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",

  ],
  theme: {
    colors: {
      transparent:'transparent',
      current: 'currentColor',
      'darker-green-sap': "#456c35",
      'dark-green-sap': '#778f51',
      'light-green-sap': '#acc38b',
      'dark-sand-green': '#c9c8b4',
      'white':'#ffffff',
      'black':'#000000'
    },
    extend: {}
  },
  plugins: [],
}
