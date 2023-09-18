/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': {
          'light': '#F9943B',
          'dark': '#F7773C'
        }
      },
    },
  },
  plugins: [],
}
