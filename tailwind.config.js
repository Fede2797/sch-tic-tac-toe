/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'darkBlue': '#15202B',
        'grayLines': '#CECECE',
        'redPlayer': '#FF4343',
      }
    },
  },
  plugins: [],
}

