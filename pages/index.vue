<script setup lang="ts">
// utils
import { format } from 'date-fns'

/**
 * state
 * ================================================================
 */
const affirmation = ref('')
const loading = ref(true)

/**
 * data fetching
 * ================================================================
 */
onMounted(async () => {
  try {
    const response = await $fetch('/api/affirmation')
    affirmation.value = response
  } catch (error) {
    affirmation.value = 'Something went wrong :( Please try again later.'
    console.error('error:', error)
  } finally {
    loading.value = false
  }
})

/**
 * date
 * ================================================================
 */
const today = computed(() => {
  return format(Date.now(), 'EEEE, MMMM d, yyyy')
})
</script>

<template>
  <div class="h-screen bg-night flex justify-center content-center">
    <div v-if="loading">Loading...</div>
    <div
      v-else
      class="w-5/6 content-center text-moonlight"
    >
      <p class="font-serif font-bold text-lg pb-6">
        {{ today }}
      </p>

      <div class="font-sans leading-tight text-5xl relative inline-block font-bold">
        <span class="absolute inset-0 bg-gradient-to-br from-pink-400 to-green-200
                    bg-clip-text text-transparent opacity-0
                    transition-opacity duration-[1500ms] ease-in-out
                    hover:opacity-100">
          {{ affirmation }}
        </span>
        <span class="bg-gradient-to-tl from-indigo-400 to-yellow-50 bg-clip-text text-transparent">
          {{ affirmation }}
        </span>
      </div>
    </div>
  </div>
</template>
