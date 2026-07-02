/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Geist', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        surface: {
          DEFAULT: '#121212',
          hover: '#1A1A1A',
        },
        primary: '#FFFFFF',
        'text-primary': '#F5F5F5',
        'text-secondary': '#A3A3A3',
        accent: '#818CF8',
        'accent-light': '#A5B4FC',
        'accent-dark': '#6366F1',
      },
      borderColor: {
        subtle: 'rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'drift': 'drift 20s ease-in-out infinite',
        'drift-reverse': 'drift-reverse 25s ease-in-out infinite',
        'drift-slow': 'drift-slow 30s ease-in-out infinite',
        'float-up': 'float-up 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'mesh': 'mesh 15s ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0%, 0%) rotate(0deg)' },
          '25%': { transform: 'translate(5%, -8%) rotate(90deg)' },
          '50%': { transform: 'translate(-3%, 5%) rotate(180deg)' },
          '75%': { transform: 'translate(-7%, -3%) rotate(270deg)' },
        },
        'drift-reverse': {
          '0%, 100%': { transform: 'translate(0%, 0%) rotate(0deg) scale(1)' },
          '33%': { transform: 'translate(-6%, 8%) rotate(-120deg) scale(1.1)' },
          '66%': { transform: 'translate(8%, -5%) rotate(-240deg) scale(0.9)' },
        },
        'drift-slow': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-20px, 30px)' },
        },
        'float-up': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
        mesh: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
