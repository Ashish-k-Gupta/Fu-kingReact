/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns:{
        '70/30': '70% 28%',
      },
      colors: {
        customBlue: '#1e40af', // Your custom color code
        customYellow: '#F59E0B',
      },
    },
  },
  plugins: [],
}