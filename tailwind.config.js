/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Cinzel"', 'serif'],
        'body': ['"Nunito Sans"', 'sans-serif'],
      },
      colors: {
        // Bleu nuit égyptien
        night: {
          950: '#0a0f1a',
          900: '#0d1526',
          800: '#1a2744',
          700: '#2a3a5c',
          600: '#3d4f73',
          400: '#6b7fa3',
        },
        // Or des pharaons
        gold: {
          50: '#fef9e7',
          100: '#fcf0c3',
          200: '#f9e08a',
          300: '#f5cc4d',
          400: '#d4af37',
          500: '#c9a227',
          600: '#b8860b',
          700: '#96690a',
          800: '#7a5309',
          900: '#5c3d07',
        },
        // Sable du désert
        sand: {
          50: '#fdfcf9',
          100: '#f9f5eb',
          200: '#f5e6c8',
          300: '#e8d4a8',
          400: '#d4bc82',
          500: '#b89f5c',
        },
        // Turquoise égyptien
        turquoise: {
          400: '#40e0d0',
          500: '#30d5c8',
          600: '#20b2aa',
        },
        // Terre cuite
        terracotta: {
          400: '#e07b4c',
          500: '#c45c26',
          600: '#a84a1c',
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
