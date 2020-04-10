const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    fontFamily: {
      display: ['mont', 'sans-serif'],
    },
    extend: {
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
      }
    },
  },
  variants: {},
  plugins: [],
}
