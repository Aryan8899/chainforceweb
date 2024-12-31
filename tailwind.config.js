/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ["'Roboto Condensed'", "sans-serif"], // Add the font family here
      },
    },
  },
  plugins: [],
}