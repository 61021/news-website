<script setup lang="ts">
import { appColor, appDescription, appName } from '~/composables/rasd'

defineOgImageComponent('NuxtSeo', {
  title: appName,
  description: appDescription,
  theme: appColor,
  colorMode: 'light',
})
</script>

<template>
  <VFlexCol
    class="relative hfull wfull"
    mt="xl:16"
    px="xl:40 6"
  >
    <HomeMainSubSection />
  </VFlexCol>
</template>
