<script setup lang="ts">

</script>

<template>
  <VFlexCol
    class="absolute left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/2"
    items="center"
    justify="center"
  >
    <i
      i-ph-question-mark
      text="7xl"
      class="mb-4"
      :class="textColors[appColor][900]"
    />

    <h2
      text="xl:2xl"
      class="font-bold"
      :class="textColors[appColor][900]"
      v-text="'لا توجد بيانات'"
    />
  </VFlexCol>
</template>
