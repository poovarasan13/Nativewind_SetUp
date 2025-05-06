/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.js', // Ensure this includes the paths to your components
    './components/**/*.{js,jsx}',
    './screens/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};