/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark': '#0a0a0f',
        'dark-2': '#111118',
        'dark-3': '#1a1a24',
        'primary': '#FF6B1A',
        'primary-dark': '#e55a0e',
        'primary-light': '#ff8a47',
        'accent': '#FFD700',
        'accent-dark': '#e6c200',
        'gray-muted': '#6b7280',
        'border-dark': '#2a2a3a',
      },
      fontFamily: {
        'heading': ['"Bebas Neue"', 'Impact', 'sans-serif'],
        'mono': ['"Be Vietnam Pro"', 'sans-serif'],
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'flicker 4s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 22%, 24%, 55%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
};
