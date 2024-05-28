<script setup lang="ts">
const { locale } = useI18n()
</script>

<template>
  <main
    class="relative min-h-screen wfull overflow-x-hidden"
    bg="slate100 dark:stone950"
    :dir="locale === 'en' ? 'ltr' : 'rtl'"
  >
    <!-- <Loader /> -->

    <Header class="relative z2" />

    <VFlexCol class="relative z2 hfull wfull">
      <slot />
    </VFlexCol>

    <Footer />
  </main>
</template>

<style>
h1,
h2,
h3,
h4,
h5,
h6,
span,
p,
i,
li {
  @apply text-primary-text dark:text-primary-text-dark;
}
</style>
