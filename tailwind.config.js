/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      boxShadow: {
        'default': '0 0 5px rgba(0,0,0,.1)'
      },
      screens: {
        md: '860px'
      }
    },
  },
  plugins: [],
}

