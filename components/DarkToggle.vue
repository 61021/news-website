<script setup lang="ts">
const color = useColorMode()

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '#222222' : '#ffffff',
  }],
})

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <VFlexCol
    items="center"
    justify="center"
    class="relative cursor-pointer"
    @click="toggleDark"
  >
    <Transition
      name="slide-up"
      mode="out-in"
    >
      <div
        v-if="color.value === 'dark'"
        i-ph-sun-fill
        class="transition-all duration-300 ease-in-out"
        text="2xl white "
      />

      <div
        v-else
        i-ph-moon-stars-fill
        class="transition-all duration-300 ease-in-out"
        text="2xl white "
      />
    </Transition>
  </VFlexCol>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 200ms ease-in-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
