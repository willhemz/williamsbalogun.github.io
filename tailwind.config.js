/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        siteCol: 'linear-gradient(to right, #7f5274 0%, #a37b6b 100%)',
        contentCol: 'linear-gradient(to right, #fff 0%, #ccc 100%)',
      },
      colors: {
        bgMenu: '#a37b6b',
        aside: 'rgb(246, 244, 242)',
      },
      fontFamily: {
        Manrope: 'Manrope',
      },
    },
  },
  plugins: [],
}
