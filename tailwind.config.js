module.exports = {
  content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.vue"
  ],
  theme: {
    extend: {

    },
    screens: {
      'md': {'min': '375px', 'max': '800px'},
      'lg': {'min': '800px', 'max': '1535px'},
    }
  },
  plugins: [],
}
