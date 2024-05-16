<script setup lang="ts">
defineProps<{
  text: string
  variant?: 'solid' | 'outline'
  bgColor?: 'strawberry' | 'banana' | 'white' | 'black'
}>()

interface StyleClassesType {
  strawberry: string
  banana: string
  white: string
  black: string
}

const styleClasses: Record<string, StyleClassesType> = {
  solid: {
    strawberry: 'bg-strawberry text-on-strawberry border-strawberry',
    banana: 'bg-banana text-on-banana border-banana',
    white: 'bg-primary-background text-secondary-text border-primary-background',
    black: 'bg-secondary-background text-primary-text border-secondary-background',
  },
  outline: {
    strawberry: 'bg-transparent text-strawberry border-strawberry',
    banana: 'bg-transparent text-banana border-banana',
    white: 'bg-transparent text-primary-text border-primary-background',
    black: 'bg-transparent text-secondary-text border-secondary-background',
  },
}
</script>

<template>
  <button
    p="sm:y3 y2 sm:x5 x4"
    flex="~ items-center justify-center"
    class="max-w-max border-2 rounded-full rounded-tr-0 transition-all duration-300 ease-in-out"
    :class="styleClasses[variant ?? 'solid'][bgColor ?? 'strawberry']"
    v-text="text"
  />
</template>
