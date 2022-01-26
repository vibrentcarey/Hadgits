module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primaryGrey: '#444444',
        primaryRed: '#DA0037',
        primaryBlack: '#171717',
        backgroundPink: '##F1E8F3',
        primaryPurple: '#673AB7',
        primaryGreen: '#59bb00'

      },
    },
    screens: {
      'xs': '450px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  }
}