/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'extra-small': '200px'
      },
      colors: {
        primary: '#ffab00'
      }
    }
  },
  plugins: []
}
