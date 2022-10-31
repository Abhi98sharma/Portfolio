/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Kameron": ['Kameron', "serif"],
        "Pridi": ['Pridi', "serif"],
        "Quicksand": ['Quicksand', "sans-serif"],
        "Inter": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
