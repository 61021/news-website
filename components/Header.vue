<script setup lang="ts">
import type { Category } from '~/types'

const isNavOpen = ref(false)

const nav = ref<HTMLElement | null>(null)
const button = ref<HTMLElement | null>(null)

onClickOutside((nav, button), () => {
  isNavOpen.value = false
})

const searchRef = ref<HTMLInputElement | null>(null)

onStartTyping(() => {
  if (searchRef.value)
    searchRef.value.focus()
})

const pending = ref(true)

const categories = ref<Category[]>([])

async function getCategories() {
  pending.value = true
  const records: Category[] = await pb.collection('categories').getFullList({
    sort: '-created',
    filter: `website="${websiteId}"`,
  })

  categories.value = [{ name: 'الرئيسية', route: 'home' }, ...records]

  pending.value = false
}

const { locale } = useI18n()

onMounted(() => {
  getCategories()
})
</script>

<template>
  <VFlexCol
    as="nav"
    class="z3 wfull"
    items="center"
  >
    <VFlexRow
      class="z10 hfull wfull"
      items="center"
      as="ul"
      :gap="12"
      justify="between"
      py="6"
      px="xl:40 6"
      :class="bgColors[appColor][900]"
    >
      <Logo
        class="z22222 h10 sm:h16"
        fill-color="white"
      />

      <button
        ref="button"
        class="flex! md:hidden!"
        i-ph-list
        text="3xl p-t"
        @click="isNavOpen = !isNavOpen"
      />

      <VFlexRow
        :gap="4"
        items="center"
      >
        <!-- <LanguageSwitcher /> -->

        <button
          text="2xl white"
          class="transition-all duration-300 ease-in-out"
          i-ph-magnifying-glass-duotone
          flex
        />

        <DarkToggle />
      </VFlexRow>
    </VFlexRow>

    <VFlexRow
      bg="white"
      class="wfull shadow"
      py="6"
      px="xl:40 6"
      border="b slate200"
    >
      <VFlexRow
        v-if="!pending"
        class="bg-p-b z10 hfull wfull"
        items="center"
        :gap="8"
        as="ul"
      >
        <NuxtLink
          v-for="category in categories"
          :key="category.id"
          flex="~ items-center justify-center"
          :to="`/${category.name.toLowerCase()}`"
        >
          <span
            text="slate900 xl dark:white"
            :class="[$route.path.includes(category?.route?.toLowerCase()) ? `${textColors[appColor][700]} font-bold` : '']"
            class="transition-all duration-300 ease-in-out"
            v-text="category.name"
          />
        </NuxtLink>
      </VFlexRow>
    </VFlexRow>
  </VFlexCol>

  <!-- <Transition name="slide-top">
    <VFlexCol
      v-if="isNavOpen"
      ref="nav"
      as="ul"
      bg="p-b"
      items="center"
      class="fixed left-0 top-18 z2 wfull md:hidden!"
      py="6"
      gap="4"
    >
      <li
        v-for="(route, i) in routes"
        :key="i"
      >
        <NuxtLink :to="route.path">
          <span
            text="xl"
            v-text="route.name"
          />
        </NuxtLink>
      </li>
    </VFlexCol>
  </Transition> -->
</template>

<style scoped>
.slide-top-enter-active,
.slide-top-leave-active {
  transition: transform 0.3s;
}

.slide-top-enter-from,
.slide-top-leave-to {
  transform: translateY(-100%);
}
</style>
