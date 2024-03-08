/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F2F6F8',
          100: '#EFEDF1',
          200: '#D7E3EA',
          300: '#CADAE2',
          400: 'b0c8d4',
          500: '#96B6C5',
          600: '#88ACBF',
          700: '#6D99B0',
          800: '#5685BF',
          900: '#476F85',
          950: '#1D2C35',
        },
        secondary: {
          50: '#E6EDF0',
          100: '#D9E3E8',
          200: '#CCDAE0',
          300: '#CADAE2',
          400: '#BFD1D9',
          500: '#ADC4CE',
          600: '#99B6C2',
          700: '#739AAB',
          800: '#5C8799',
          900: '#456573',
          950: '#263840',
        },
        spacing: {
          '100': '68rem',
          '102': '70rem',
          '103': '72rem',
          '104': '74rem',
          '105': '76rem',
          '106': '78rem',
          '107': '80rem',
          '108': '82rem',
          '109': '84rem',
          '110': '86rem',
        }
      },
    },
  },
  plugins: [],
};
