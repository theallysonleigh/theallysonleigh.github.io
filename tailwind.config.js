/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["**/*.html", "assets/js/**/*.js"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '3-auto': 'repeat(3, minmax(0, auto))'
      }
    },
    fontFamily: {
      serif: ["span-compressed"],
      mono: ["space-mono"],
      button: ["workbench"]
    }
  },
  plugins: [],
}

