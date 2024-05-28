<script setup lang="ts">
defineProps<{
  text: string
  variant?: 'solid' | 'outline'
  bgColor?: 'primary' | 'primary' | 'white' | 'black'
}>()

interface StyleClassesType {
  primary: string
  primary: string
  white: string
  black: string
}

const styleClasses: Record<string, StyleClassesType> = {
  solid: {
    primary: 'bg-primary text-on-primary border-primary',
    primary: 'bg-primary text-on-primary border-primary',
    white: 'bg-primary-background text-secondary-text border-primary-background',
    black: 'bg-secondary-background text-primary-text border-secondary-background',
  },
  outline: {
    primary: 'bg-transparent text-primary border-primary',
    primary: 'bg-transparent text-primary border-primary',
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
    :class="styleClasses[variant ?? 'solid'][bgColor ?? 'primary']"
    v-text="text"
  />
</template>
