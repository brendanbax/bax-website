import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        rokkitt: ['Rokkitt', 'serif'],
        chivo: ['Chivo', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif']
      },
      colors: {
        brand: {
          50: 'rgb(var(--color-brand-50) / <alpha-value>)',
          100: 'rgb(var(--color-brand-100) / <alpha-value>)',
          200: 'rgb(var(--color-brand-200) / <alpha-value>)',
          300: 'rgb(var(--color-brand-300) / <alpha-value>)',
          400: 'rgb(var(--color-brand-400) / <alpha-value>)',
          500: 'rgb(var(--color-brand-500) / <alpha-value>)',
          600: 'rgb(var(--color-brand-600) / <alpha-value>)',
          700: 'rgb(var(--color-brand-700) / <alpha-value>)',
          800: 'rgb(var(--color-brand-800) / <alpha-value>)',
          900: 'rgb(var(--color-brand-900) / <alpha-value>)',
          950: 'rgb(var(--color-brand-950) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-brand-500) / <alpha-value>)'
        },
        base: {
          50: 'rgb(var(--color-base-50) / <alpha-value>)',
          100: 'rgb(var(--color-base-100) / <alpha-value>)',
          200: 'rgb(var(--color-base-200) / <alpha-value>)',
          300: 'rgb(var(--color-base-300) / <alpha-value>)',
          400: 'rgb(var(--color-base-400) / <alpha-value>)',
          500: 'rgb(var(--color-base-500) / <alpha-value>)',
          600: 'rgb(var(--color-base-600) / <alpha-value>)',
          700: 'rgb(var(--color-base-700) / <alpha-value>)',
          800: 'rgb(var(--color-base-800) / <alpha-value>)',
          900: 'rgb(var(--color-base-900) / <alpha-value>)',
          950: 'rgb(var(--color-base-950) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-base-500) / <alpha-value>)'
        }
      }
    }
  }
}
