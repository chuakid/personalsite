module.exports = {
  purge: ['./_site/**/*.html', './src/**/*.njk'],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      transform: ['hover'],
    }
  },
  plugins: [],
}
