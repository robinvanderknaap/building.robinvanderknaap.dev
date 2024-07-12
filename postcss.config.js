const tailwindConfig = './tailwind.config.js';
const tailwind = require('tailwindcss')(tailwindConfig);
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [tailwind,  ...(process.env.HUGO_ENVIRONMENT === 'production' ? [autoprefixer] : [])],
};