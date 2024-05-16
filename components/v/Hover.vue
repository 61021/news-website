<script setup lang="ts">
defineProps<{
  as?: string
}>()

const { hover, unhover } = useCursorStore()
</script>

<template>
  <Component
    :is="as ?? 'div'"
    @mouseover="() => hover()"
    @mouseleave="() => unhover()"
  >
    <slot />
  </Component>
</template>
