/**
 * cache
 * ================================================================
 */
interface AffirmationCache {
  affirmation: null | string
  timestamp: null | number
}

const cache: AffirmationCache = {
  affirmation: null,
  timestamp: null
}

/**
 * server handler
 * ================================================================
 */
export default defineEventHandler(async (event) => {
  /**
   * check if cached response exists and is less than 24 hours old
   * ================================================================
   */
  const now = Date.now()
  if (cache.affirmation && cache.timestamp && now - cache.timestamp < 24 * 60 * 60 * 1000) {
      return cache.affirmation
  }

  /**
   * nuxt config
   * ================================================================
   */
  const config = useRuntimeConfig()
  const apiKey = config.geminiApiKey

  try {
    /**
     * fetch gemini API
     * ================================================================
     */
    const response = await $fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        contents: [{
          parts: [{
            'text': 'Provide a unique, motivational daily affirmation.'
          }]
        }]
      }
    })

    const affirmation = response.candidates[0].content.parts[0].text.replace('*', '')

    /**
     * store result in cache
     * ================================================================
     */
    cache.affirmation = affirmation
    cache.timestamp = now

    return cache.affirmation
  } catch (error) {
    console.log('OpenAI API error:', error)
    return { error: "Something went wrong :( Please try again later." }
  }
})


