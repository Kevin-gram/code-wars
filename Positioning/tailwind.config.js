/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark': '#000000fc',
        'primary': {
          100: ' #0071f8',
          200: '#008af8',

      },
      'lit':{
        100: '#ffffff',
        200: '#ffffff1a',
        300: '#f7f7f7',
        400: '#eeeeee',
      } ,
      'but_Color': '#ee626b'
    },
      fontFamily: {
        'body': ['Nunito']
      }
    },
  },
  plugins: [],
}
