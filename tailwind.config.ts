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
        // Modern Ledger Palette
        primary: {
          DEFAULT: '#181919',  // Thamar Black
          light: '#242C34',     // Gunmetal (for hover states)
        },
        secondary: {
          DEFAULT: '#264653',   // Dark Teal
          light: '#2A5F6D',     // Lighter teal
        },
        accent: {
          DEFAULT: '#2E865F',   // Forest Green (CTAs)
          light: '#3A9B6F',
        },
        success: '#C6F4D6',     // Mint (positive metrics)
        neutral: {
          DEFAULT: '#808D8E',   // Gunmetal Grey
          light: '#A0AAAB',
          dark: '#5A6364',
        },
        background: {
          DEFAULT: '#FFFFFF',   // White
          dark: '#0F1010',      // Near-black for dark mode
        },
        foreground: {
          DEFAULT: '#181919',   // Black on light
          inverse: '#FFFFFF',   // White on dark
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#181919',
            a: {
              color: '#264653',
              '&:hover': {
                color: '#2E865F',
              },
            },
            h1: {
              color: '#181919',
            },
            h2: {
              color: '#181919',
            },
            h3: {
              color: '#264653',
            },
            code: {
              color: '#264653',
              backgroundColor: '#F5F5F5',
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
