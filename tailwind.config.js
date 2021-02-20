const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      logo: ['Spartan', 'sans-serif'],
      sans: ['Jost', 'sans-serif']
    },
    colors: {
      white: colors.white,
      shipGray: {
        50: '#f5f5f5',
        100: '#ebebec',
        200: '#cecdcf',
        300: '#b1afb2',
        400: '#767478',
        500: '#3b383e',
        600: '#353238',
        700: '#2c2a2f',
        800: '#232225',
        900: '#1d1b1e'
      },
      japonica: {
        50: '#fef9f8',
        100: '#fdf2f0',
        200: '#f9e0da',
        300: '#f5cdc4',
        400: '#eea797',
        500: '#e7816b',
        600: '#d07460',
        700: '#ad6150',
        800: '#8b4d40',
        900: '#713f34'
      },
      shark: {
        50: '#f4f4f4',
        100: '#e8e8e9',
        200: '#c7c6c7',
        300: '#a5a4a5',
        400: '#616062',
        500: '#1d1c1e',
        600: '#1a191b',
        700: '#161517',
        800: '#111112',
        900: '#0e0e0f'
      }
    },
    extend: {
      spacing: {
        18: '72px',
        22: '86px',
        42: '166px',
        46: '189px'
      },
      letterSpacing: {
        xl: '.28em'
      },
      fontSize: {
        'heading-md': ['32px', '36px'],
        'base-sm': ['15px', '25px'],
        'btn-text': ['15px', 'auto']
      },
      height: {
        md: '308px',
        lg: '640px',
        xl: '843px'
      },
      margin: {
        34: '139px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
