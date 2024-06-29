/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': "#F5F7FA",
        'neutralDGrey': "#F6F7F8",
        'grey': "#6F7F8F",
        'brandPrimary': "#2951D5",
        'brandSecondary': "red",
        'neutralSilver': "#F5F7FA",
        'gray900': "#717171",
        'gray800': "#373F47",
        'textPrimary': "#F09721",
        'bgGreen': "#2B2B2B",
        'bgB': "#1A1C1E",
        'bgWhite': "white",
        'bgBlack': "black",
        'yellow': "yellow",
        'blackBlack': "#26262C",
        'backgroundC2': "#FFFAF3",
        'contained': "#1976D2",
        'bg1': "#E7700D",
        'bg2': "#C8CCD0",
        'bg3': "#3B4045",
        'bg4': "#B6CEC7",
      },
      margin: {
        '26': '83px',
      }
    },
    fontFamily: {
      'outfit': ['Outfit', 'sans-serif'],
      'opensans': ['Open Sans', 'sans-serif'],
    }
  },
  plugins: [require('flowbite/plugin')],
}

