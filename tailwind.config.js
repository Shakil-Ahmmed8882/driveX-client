/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors: {
        primaryColor: "#715BE6",
        lightGray: "#242424",
        thickGray1: "#2B2B2B",
        thickGray2: "#313131",
      }
    },
  },
  plugins: [],
}