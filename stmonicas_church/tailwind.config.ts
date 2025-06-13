import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // enable class-based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // adjust according to your project
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C3E50',
        accent: '#D4AF37',
        background: '#F9F9F7',
        textPrimary: '#333333',
        textSecondary: '#7F8C8D',

        darkBackground: '#1E293B',
        darkPrimary: '#CBD5E1',
        darkAccent: '#FBBF24',
        darkTextPrimary: '#F1F5F9',
        darkTextSecondary: '#94A3B8',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceOnce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-out-slow': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease forwards',
        'slide-up': 'slide-up 0.6s ease forwards',
        'bounce-once': 'bounceOnce 1s ease',
        'fade-out-slow': 'fade-out-slow 2s ease forwards',
      },
    },
  },
  plugins: [],
};

export default config;
