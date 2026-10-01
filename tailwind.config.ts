import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfbf0',
          100: '#faf5dc',
          200: '#f5eaae',
          300: '#eed87b',
          400: '#e6c44d',
          500: '#d4af37', // primary gold
          600: '#b89124',
          700: '#926e1c',
          800: '#77571c',
          900: '#64471c',
          light: '#f5e3a9',
          dark: '#aa841c',
        },
        obsidian: {
          950: '#070a0e',
          900: '#0a0d12',
          850: '#0e131a',
          800: '#121721',
          750: '#171e2b',
          700: '#1c2534',
        },
        emerald: {
          accent: '#2e7d5e',
          light: '#38a177',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cinzel', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 8px 24px rgba(212, 175, 55, 0.22)',
        'gold-lg': '0 16px 40px rgba(212, 175, 55, 0.32)',
      },
      animation: {
        'shimmer': 'shimmer 4s linear infinite',
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)' },
          '50%': { boxShadow: '0 0 32px rgba(212, 175, 55, 0.45)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
