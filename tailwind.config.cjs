/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:'Poppins',
        roboto:'Roboto'
      },
      animation:{
        downfall: 'downfall 10s ease-in-out infinite'
      },
      keyframes:{
        downfall:{
          '0%, 20%':{color:'white'},
          '20%, 50%': {  color:'rgb(30, 41, 59)'},
          '50%, 100%':{color:'white'}
        }
      }
    },
  },
  plugins: [],
}
