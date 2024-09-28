const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './hugo_stats.json',
    './assets/js/*.js'
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      colors: {
        accent: colors.pink,
      },
      fontFamily: {
        'righteous': ['Righteous']
      }
    },
  },
  plugins: [],
}
