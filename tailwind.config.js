/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent:'transparent',
      current: 'currentColor',
      'darker-green-sap': "#456c35",
      'dark-green-sap': '#778f51',
      'light-green-sap': '#acc38b',
      'dark-sand-green': '#c9c8b4',

    }
  },
  plugins: [],
}
