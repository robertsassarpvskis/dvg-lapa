/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        greenDark: "#8B9D77",
        greenLight: "#D1DBC5",
        whiteGray: "#f8f9fa",
        // Adding custom text color as part of colors:
      },
    },
  },
  plugins: [],
};
