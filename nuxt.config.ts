// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  devtools: { enabled: true },
  googleFonts: {
    families: {
      'Roboto Mono': true,
      'Zen Dots': true
    }
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    geminiApiKey: process.env.GEMINI_API_KEY
  }
})
