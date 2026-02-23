import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      colors: {
        /* ── Design system tokens (HSL-var mapped) ── */
        background: 'hsl(220 10% 4%)',
        foreground: 'hsl(0 0% 95%)',
        card: {
          DEFAULT: 'hsl(220 10% 6%)',
          foreground: 'hsl(0 0% 95%)',
        },
        primary: {
          DEFAULT: 'hsl(0 0% 95%)',
          foreground: 'hsl(220 10% 4%)',
        },
        secondary: {
          DEFAULT: 'hsl(220 10% 12%)',
          foreground: 'hsl(0 0% 95%)',
        },
        muted: {
          DEFAULT: 'hsl(220 10% 12%)',
          foreground: 'hsl(220 10% 60%)',
        },
        accent: {
          DEFAULT: 'hsl(220 10% 14%)',
          foreground: 'hsl(0 0% 95%)',
        },
        border: 'hsl(220 10% 16%)',
        input: 'hsl(220 10% 16%)',
        ring: 'hsl(0 0% 95%)',
        /* ── Legacy aliases (keep existing page classes working) ── */
        bg: 'hsl(220 10% 4%)',
        s1: 'hsl(220 10% 6%)',
        s2: 'hsl(220 10% 10%)',
        border2: 'hsl(220 10% 22%)',
        dim: 'hsl(220 10% 60%)',
        lite: 'hsl(0 0% 95%)',
      },
      fontFamily: {
        display: ["'Inter'", '-apple-system', 'system-ui', 'sans-serif'],
        sans: [
          "'Inter'",
          '-apple-system',
          'BlinkMacSystemFont',
          "'Segoe UI'",
          'system-ui',
          'sans-serif',
        ],
        mono: ["'Inter'", '-apple-system', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        /* Based on --radius: 0.25rem */
        sm: '0px',
        md: '2px',
        lg: '4px',
        xl: '8px',
        '2xl': '12px',
        '3xl': '20px',
      },
      keyframes: {
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        blurIn: {
          from: { opacity: '0', filter: 'blur(10px)' },
          to: { opacity: '1', filter: 'blur(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideDiagonal: {
          from: { opacity: '0', transform: 'translate(-30px, 30px)' },
          to: { opacity: '1', transform: 'translate(0, 0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-up': 'scaleUp 0.4s ease-out forwards',
        'blur-in': 'blurIn 0.5s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'slide-diagonal':
          'slideDiagonal 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
};
export default config;
