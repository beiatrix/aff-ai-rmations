<template>
  <span class="loader"></span>
</template>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  opacity: 80%;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: animloader 2s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: -72px 0 var(--color-moonlight) inset;
  }
  100% {
    box-shadow: 48px 0 var(--color-moonlight) inset;
  }
}
</style>
