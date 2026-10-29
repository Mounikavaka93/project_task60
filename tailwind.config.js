/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1c1915',
        ivory: '#f7f4ee',
        paper: '#f3efe8',
        sand: '#e7dfd3',
        line: '#ddd4c6',
        stone: '#5c564e',
        bronze: '#6a4b2c',
        mist: '#e7d7c3',
        garnet: '#8a3030',
      },
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      screens: {
        wide: '1440px',
      },
      boxShadow: {
        card: '0 18px 40px rgba(28, 25, 21, 0.08)',
      },
    },
  },
  plugins: [],
};
