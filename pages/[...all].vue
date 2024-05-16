<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main
    p="x4 y10"
    text="center black"
  >
    <div text-4xl>
      <div i-ph-warning-circle-duotone inline-block />
    </div>
    <div>Not found</div>
    <div>
      <button text-sm m="3 t8" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
