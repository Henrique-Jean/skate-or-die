/**@type {import('tailwindcss').Config}*/

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme:{
    extend: {
      colors: {
        'neo-yellow': '#FFDE00',
        'neo-pink': '#FF0099',
        'neo-blue': '#00F0FF',
        'neo-black': '#000000',
        'neo-white': '#FFFFFF',
      },

      boxShadow: {
        'neo': '5px 5px 0px 0px #000000',
        'neo-lg': '8px 8px 0px 0px #000000',
      },

      fontFamily: {
        'display': ['"Archivo Black"', 'sans-serif'],
        'body': ['"Public Sans"', 'sans-serif'],
      }
    },
  },
  plugins: []
}