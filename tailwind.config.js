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
      'md': {'min': '150px', 'max': '800px'},
      'lg': {'min': '800px'},
    }
  },
  plugins: [],
}
