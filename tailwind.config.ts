import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fresh Modern Palette (inspired by CV site)
        primary: {
          DEFAULT: '#50E3C2',  // Fresh Teal/Cyan
          light: '#6EEBD4',    // Lighter teal
          dark: '#3DCFB2',     // Darker teal
        },
        secondary: {
          DEFAULT: '#1E40AF',  // Deep Blue
          light: '#3B82F6',    // Lighter blue
          dark: '#1E3A8A',     // Darker blue
        },
        accent: {
          DEFAULT: '#A78BFA',  // Soft Purple
          light: '#C4B5FD',    // Lighter purple
          dark: '#8B5CF6',     // Darker purple
        },
        success: '#10B981',    // Green
        warning: '#F59E0B',    // Amber
        danger: '#EF4444',     // Red
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        background: {
          DEFAULT: '#FFFFFF',     // White
          light: '#F0F9FF',       // Very light blue
          gray: '#F9FAFB',        // Light gray
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'card': '12px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#374151',
            a: {
              color: '#50E3C2',
              '&:hover': {
                color: '#3DCFB2',
              },
            },
            h1: {
              color: '#111827',
            },
            h2: {
              color: '#111827',
            },
            h3: {
              color: '#1F2937',
            },
            code: {
              color: '#A78BFA',
              backgroundColor: '#F3F4F6',
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
