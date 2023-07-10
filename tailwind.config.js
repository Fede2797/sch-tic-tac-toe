/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'darkBlue': '#15202B',
        'grayLines': '#CECECE',
        'redPlayer': '#FF4343',
      },
      keyframes: {
        'glitch': {
          '0%, 100%': { 
            transform: 'translate(8px)',
            opacity: .3 
          },
          '50%': { 
            transform: 'translate(-8px)',
            opacity: .9
          },
        },
        'glitch2': {
          '0%, 100%': { 
            transform: 'translate(-15px)',
            opacity: .7
          },
          '50%': { 
            transform: 'translate(15px)',
            opacity: .1
          },
        },
        'glitch3': {
          '0%, 100%': { 
            transform: 'translate(-4px)',
            opacity: .8
          },
          '50%': { 
            transform: 'translate(3px)',
            opacity: .4
          },
        }
      },
      animation: {
        'glitch': 'glitch .25s ease-in-out infinite',
        'glitch2': 'glitch2 .65s ease-in-out infinite',
        'glitch3': 'glitch3 .35s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

