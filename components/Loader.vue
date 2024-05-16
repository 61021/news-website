<script setup lang="ts">
const isLoading = ref(true)
const isLogo = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLogo.value = true
  }, 500)
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
})
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isLoading"
      flex="~ items-center justify-center"
      bg="banana"
      class="fixed left-0 top-0 z200469046140 hscreen wfull"
    >
    <Transition name="fade">
      <VImage
        v-show="isLogo"
        src="/images/loader.png"
        class="spinning h80 w80"
      />
    </Transition>

    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.spinning {
  animation: spin 3s infinite cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
