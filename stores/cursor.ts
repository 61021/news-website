export const useCursorStore = defineStore('cursor', () => {
  const isHovering = ref(false)

  function hover() {
    isHovering.value = true
  }

  function unhover() {
    isHovering.value = false
  }

  return {
    isHovering,
    hover,
    unhover,
  }
})
