/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors: {
        primaryColor: "#715BE6",
        lightGray: "#242424",
        thickGray: "#2B2B2B"
      }
    },
  },
  plugins: [],
}