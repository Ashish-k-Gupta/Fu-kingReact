/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #182848, #4b6cb7)',
        'custom-gradient-card': 'linear-gradient(to right, #5C5C89, #12748F)',
      },
      colors: {
        customBlue: '#1e40af',
        customYellow: '#F59E0B',
      },
    },
  },
  plugins: [],
}


