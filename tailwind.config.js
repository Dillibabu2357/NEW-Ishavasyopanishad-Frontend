/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        armygreen: "#A77E20",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
