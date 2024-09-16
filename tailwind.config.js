/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors: {
        primaryColor: "#01bccd",
        lightGray: "#242424",
        primaryYellow: "#f09903",
        thickGray1: "#2B2B2B",
        thickGray2: "#313131",
      }
    },
  },
  plugins: [],
}