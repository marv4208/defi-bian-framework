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
        // Paper Design System Colors
        primary: "#111111",
        secondary: "#8B5CF6",
        success: "#16A34A",
        warning: "#D97706",
        danger: "#DC2626",
        surface: "#FFFFFF",
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'Roboto', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        mono: ['var(--font-pt-mono)', 'PT Mono', 'monospace'],
      },
      fontSize: {
        xs: "14px",
        sm: "16px",
        base: "18px",
        lg: "24px",
        xl: "32px",
        "2xl": "40px",
        "3xl": "48px",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        base: "16px",
        lg: "24px",
        xl: "32px",
      },
      boxShadow: {
        paper: "0 4px 6px rgba(0, 0, 0, 0.07)",
        "paper-hover": "0 10px 15px rgba(0, 0, 0, 0.1)",
        "paper-lg": "0 20px 25px rgba(0, 0, 0, 0.15)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#111827',
            a: {
              color: '#8B5CF6',
              '&:hover': {
                color: '#7C3AED',
              },
            },
            h1: {
              color: '#111111',
              fontFamily: 'Montserrat, sans-serif',
            },
            h2: {
              color: '#111111',
              fontFamily: 'Montserrat, sans-serif',
            },
            h3: {
              color: '#111111',
              fontFamily: 'Montserrat, sans-serif',
            },
            code: {
              color: '#8B5CF6',
              backgroundColor: '#F3F4F6',
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
              fontFamily: 'PT Mono, monospace',
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
