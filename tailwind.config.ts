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
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))',
        card: 'hsl(var(--card))',
        border: 'hsl(var(--border))',
        accent: 'hsl(var(--accent))'
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0, 0, 0, 0.24)'
      }
    }
  },
  plugins: []
} satisfies Config;
