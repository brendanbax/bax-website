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
        brand: 'rgb(var(--color-brand) / <alpha-value>)'
      }
    }
  }
}
