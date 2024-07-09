/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Nantes': ['NantesFont', 'sans-serif'],
        'Messina': ['MessinaFont', 'sans-serif'],
        'NeueHaas': ['NeueHassFont', 'sans-serif'],
      },
      colors: {
        primaryBlue: "#2042B6",
        primary: "#ededed",
        secondary: "#f3f3f3",
        tertiary: "#151030",
        footerBg: "#e6e6e6",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      backgroundImage:{
        "matrix-pattern": "url('/src/assets/matrix.png')",
        "rectangleBG": "url('/src/assets/Rectangle.png')",
        "sliderBG": "url('/src/assets/sliderBg.png')",
        "navbarIcon": "url('/src/assets/logo.png')",
      }
    },
  },
  plugins: [],
}

