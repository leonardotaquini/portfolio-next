import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './features/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1200px'
        }
      },
      colors: {
        background: '#09090B',
        foreground: '#FAFAFA',
        muted: '#A1A1AA',
        card: '#111113',
        border: '#27272A',
        accent: '#6366F1'
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0, 0, 0, 0.24)'
      }
    }
  },
  plugins: []
} satisfies Config;
