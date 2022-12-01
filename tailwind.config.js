const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        polarnight: "#434C5E",
        polarnightdark: "#2E3440",
        snowbright: "#ECEFF4",
        snow: "E5E9F0",
        snowdark: "#D8DEE9",
      },
      fontSize: {
        "10xl": "12vh",
      }
    },
  },  plugins: [],
}
