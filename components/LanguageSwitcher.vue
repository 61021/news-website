<script setup lang="ts">
const { setLocale, locale } = useI18n()

const langs = [
  {
    code: 'en',
    text: 'English',
  },
  {
    code: 'ar',
    text: 'العربية',
  },
]
</script>

<template>
  <button
    v-for="lang in langs.filter(l => l.code !== locale)"
    :key="lang.code"
    flex
    text="xl white"
    @click="setLocale(lang.code)"
    v-text="lang.text"
  />
</template>
