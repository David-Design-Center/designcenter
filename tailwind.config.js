import aspectRatio from '@tailwindcss/aspect-ratio';
import relumeTailwind from '@relume_io/relume-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#C5A267',
        secondary: '#2D2D2D',
        gold: '#C0A960',
        background: '#ffffff',
        foreground: '#000000',
        muted: '#f5f5f5',
        'muted-foreground': '#6c6c6c',
        'primary-foreground': '#ffffff',
        brand: 'var(--brand, 45 100% 50%)',
        'brand-foreground': 'var(--brand-foreground, 0 0% 100%)',
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        rainbow: "rainbow var(--speed, 2s) infinite linear",
      },
      keyframes: {
        rainbow: {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" },
        },
      },
      scale: {
        '102': '1.02',
      },
      boxShadow: {
        'elegant': '0 4px 6px rgba(0, 0, 0, 0.05)',
      },
      rotate: {
        '15': '15deg',
      },
      backgroundImage: {
        'noise': "url('https://www.reactbits.dev/assets/noise.png')",
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
      },
    },
  },
  presets: [relumeTailwind],
  plugins: [aspectRatio, require('@tailwindcss/typography')],
};