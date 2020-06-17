const { colors, fontSize, margin } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    fontFamily: {
      display: ['mont', 'sans-serif'],
      body: ['brandan','serif'],
      bodyMedium : ['brandanmedium', 'serif']
    },
    fontSize:{
      ...fontSize,
      '7xl': '5rem'
    },
    extend: {
      margin: {
        '28':'7rem'
      },
      padding:{
        '28':'7rem'
      },
      letterSpacing :{
        'body':'0.035em'
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
          '100': '#585858',
          '200': `#7f7f7f`,
          '300': '#bbbbbb',

        }
      },
    },
  },
  variants: {},
  plugins: [],
}
