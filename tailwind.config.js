module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}',],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['Greycliff', 'Arial', 'sans-serif'],
      'display': ['Baton Turbo', 'Arial', 'sans-serif'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1500px",
      "3xl": "1920px"
    },
    extend: {
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      colors: {
        'black': '#000',
        'white': '#FFF',
        blue: {
          'light': '#015FEE',
          DEFAULT: '#1658B3',
          'dark': '#0D3C88'
        },
        pink: {
          DEFAULT: '#EEE1D9'
        },
        yellow: {
          DEFAULT: '#FCFFC7'
        }
      }
    },
  }
}