/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'redfooter': '#F83A3A',
        'pinkback':'#FFF9F9'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

