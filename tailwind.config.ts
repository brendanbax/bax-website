import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        rokkitt: ['Rokkitt', 'serif']
      }
    }
  }
}
