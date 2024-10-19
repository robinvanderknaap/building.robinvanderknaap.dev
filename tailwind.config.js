const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './hugo_stats.json',
    './assets/js/*.js'
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
