module.exports = {
  content: ['./_site/**/*.html', './src/**/*.njk'],
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
