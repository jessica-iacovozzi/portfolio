/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
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
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animationDelay: {
        '0': '0ms',
        '200': '200ms',
        '400': '400ms',
      },
      mediaQueries: {
        '(prefers-reduced-motion: reduce)': {
          animation: 'none !important',
          transition: 'none !important',
        }
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('flowbite/plugin')],
}
