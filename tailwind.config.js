/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: '#00ff00',
      secondary: '#008400',
      tertiary: '#101010', 
      desktop: '#008282',
      element: '#c3c3c3',
      ...colors,
    },
    extend: {
      fontFamily: {
        'w95:': ['w95fa', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

