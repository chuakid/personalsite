module.exports = {
  content: ['./_site/**/*.{html,njk}', './src/**/*.njk'],
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
  watch: ['_site/**/*.css'],
}
