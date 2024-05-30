<script setup lang="ts">
import { appColor, appDescription, appName } from '~/composables/rasdiq'

defineOgImageComponent('NuxtSeo', {
  title: appName,
  description: appDescription,
  theme: appColor,
  colorMode: 'light',
})

useHead({
  title: 'الرئيسية',
  meta: [
    {
      name: 'description',
      content: appDescription,
    },
  ],
})
</script>

<template>
  <VFlexCol
    class="relative hfull wfull"
    mt="xl:16 8"
    px="xl:40 6"
  >
    <HomeMainSubSection />
  </VFlexCol>
</template>
