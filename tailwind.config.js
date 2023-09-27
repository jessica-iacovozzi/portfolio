/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': {
          DEFAULT: '#FFC0CB'
        }
      },
      borderWidth: {
        '1.5': '1.5px',
        '2.5': '2.5px',
        '3': '3px'
      },
    },
  },
  plugins: [],
}
