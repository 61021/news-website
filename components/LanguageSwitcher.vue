<script setup lang="ts">
const { setLocale, locale } = useI18n()

const langs = [
  {
    code: 'en',
    icon: 'i-circle-flags-uk',
  },
  {
    code: 'ar',
    icon: 'i-circle-flags-iq',
  },
]
</script>

<template>
  <button
    v-for="lang in langs.filter(l => l.code !== locale)"
    :key="lang.code"
    :class="[lang.icon]"
    flex
    text="xl"
    @click="setLocale(lang.code)"
  />
</template>
