import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        night: '#12062b',
        moonlight: '#e9e9f7'
      }
    },
    fontFamily: {
      sans: ['Zen Dots', 'sans-serif'],
      serif: ['Roboto Mono', 'serif']
    }
  }
}
