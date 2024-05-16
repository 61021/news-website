<script setup lang="ts">
defineProps<{
  as?: string
}>()
</script>

<template>
  <Component
    :is="as ?? 'div'"
    flex="~ row"
  >
    <slot />
  </Component>
</template>
