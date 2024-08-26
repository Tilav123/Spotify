/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'vsm': { 'raw': '(min-width: 425px)' }
      }
    },
  },
  plugins: [],
}

