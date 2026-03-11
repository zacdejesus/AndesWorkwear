module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      theme: {
        extend: {
          colors: {
            gold: '#B89A54',
            'gray-dark': '#2E2E2E',
            'gray-medium': '#6E6E6E',
            'gray-light': '#F2F2F2',
            'orange-safety': '#D97706',
          },
          fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
            league: ['League Spartan', 'sans-serif'],
          },
        },
      },
    },
  },
}
