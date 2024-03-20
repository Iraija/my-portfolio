/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-mode-A": "#f4f4f4",
        "light-mode-B": "#242424",
        "dark-mode-A": "#f4f4f4",
        "dark-mode-B": "#2e2e32",
      }
    },
    fontFamily: {
      Montserrat: ["Montserrat, sans-serif"],
    },
    container: {
      padding: "3rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "1024px",
    },
  },
  plugins: [],
}