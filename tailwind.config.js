/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        john: ["Josefin Sans", "sans-serif"],
        gistesy: ["Gistesy", "cursive"],
      },
      colors: {
        text: '#1a1a2e',
        background: '#f8fafc',
        primary: '#0f172a',
        secondary: '#1e40af',
        accent: '#f59e0b',
        gradient: {
          start: '#667eea',
          middle: '#764ba2',
          end: '#f093fb'
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-accent': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-warm': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(103, 126, 234, 0.3)',
        'glow-lg': '0 0 30px rgba(103, 126, 234, 0.4)',
      }
    },
  },
  plugins: [],
}