/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enables dark mode by adding the class "dark"
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#fafafa",
          dark: "#000000",
        },
        surface: {
          light: "#ffffff",
          dark: "#1f1f1f",
        },
        accent: {
          light: "#db2777", // pink-600
          dark: "#ec4899", // pink-500
        },
      },
    },
  },
  plugins: [],
};
