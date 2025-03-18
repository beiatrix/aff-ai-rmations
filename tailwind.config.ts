import type { Config } from 'tailwindcss'

const plugin = require('tailwindcss/plugin')

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        night: '#16062b',
        moonlight: '#e9e9f7'
      }
    },
    fontFamily: {
      sans: ['Zen Dots', 'sans-serif'],
      serif: ['Roboto Mono', 'serif']
    }
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      const colors = theme('colors')
      const newColors = Object.keys(colors).reduce((acc, key) => {
        const value = colors[key]
        if (typeof value === 'string') {
          acc[`--color-${key}`] = value
        }
        return acc
      }, {})

      addBase({
        ':root': newColors
      })
    })
  ]
}
