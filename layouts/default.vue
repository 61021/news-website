<script setup lang="ts">
const { locale } = useI18n()
</script>

<template>
  <main
    class="relative min-h-screen wfull overflow-x-hidden"
    bg="primary-background dark:primary-background-dark"
    :dir="locale === 'en' ? 'ltr' : 'rtl'"
  >
    <VCursor />

    <Loader />

    <Header />

    <VFlexCol class="relative hfull wfull">
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
i {
  @apply text-primary-text dark:text-primary-text-dark;
}
</style>
