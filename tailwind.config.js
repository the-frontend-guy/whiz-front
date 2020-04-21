const { colors, fontSize, margin } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    fontFamily: {
      display: ['mont', 'sans-serif'],
      body: ['brandan','serif']
    },
    fontSize:{
      ...fontSize,
      '7xl': '5rem'
    },
    extend: {
      margin: {
        '28':'7rem'
      },
      screens:{
        '2xl': '1441px'
      },
      colors: {
        blue: {
          ...colors.blue,
          '100': '#5466ff',
        },
        gray: {
          ...colors.gray,
          '100': '#7f7f7f',
          '200': '#d9d9d9',
          '300': `#989898`

        }
      },
    },
  },
  variants: {},
  plugins: [],
}
