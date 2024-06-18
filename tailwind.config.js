/** @type {import('tailwindcss').Config} */

const gradientsPlugin = require('./gradients')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'pokeball': "url('../images/background-img.jpg')"
      },
      screens: {
        'xs': '495px',
      }
    },
  },
  plugins: [
    gradientsPlugin,
    function ({ addUtilities }) {
      addUtilities({
        '.main-before': {
          content: '""',
          'background-color': 'rgba(255, 255, 255, 0.7)',
          'z-index': 1,
        },
      }, ['before']);
    },
  ],
}

