<script setup lang="ts">
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
</script>

<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      {{ affirmation }}
    </div>
  </div>
</template>
