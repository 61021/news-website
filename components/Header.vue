<script setup lang="ts">
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

interface Collection {
  id: string
  titleAr: string
  titleEn: string
}

const pending = ref(true)
const collections = ref<Collection[]>([])

async function getCollections() {
  pending.value = true
  const records: Collection[] = await pb.collection('collections').getFullList({
    sort: '-created',
  })

  collections.value = records
  pending.value = false
}

const { locale } = useI18n()

getCollections()
</script>

<template>
  <VFlexCol
    bg="primary-background dark:primary-background-dark"
  >
    <VFlexRow
      as="nav"
      class="z3 wfull"
      items="center"
      p="xl:x16 x4 y4"
    >
      <VFlexRow
        class="bg-p-b z10 hfull wfull"
        items="center"
        as="ul"
        :gap="4"
        justify="between"
      >
        <Logo class="z22222 h10 sm:h14" />

        <button
          ref="button"
          class="flex! md:hidden!"
          i-ph-list
          text="3xl p-t"
          @click="isNavOpen = !isNavOpen"
        />

        <VFlexRow
          :gap="2"
          class="h10 wfull rounded-full"
          items="center"
          p="e4"
          bg="transparent"
          border="~ slate400"
        >
          <input
            ref="searchRef"
            class="hfull wfull rounded-full px4 placeholder:text-slate400 outline-none!"
            text="primary-text dark:primary-text-dark"
            bg="transparent"
            :placeholder="`${$t('header.search')}...`"
            type="search"
          >

          <i
            i-ph-magnifying-glass-duotone
            text="slate400 xl"
          />
        </VFlexRow>

        <VFlexRow
          :gap="4"
          items="center"
        >
          <LanguageSwitcher />

          <DarkToggle />

          <NuxtLink
            to="/cart"
            text="2xl hover:strawberry primary-text dark:primary-text-dark hover:dark:banana"
            class="transition-all duration-300 ease-in-out"
            i-ph-user-duotone
            flex
          />

          <NuxtLink
            to="/cart"
            text="2xl hover:strawberry primary-text dark:primary-text-dark hover:dark:banana"
            class="transition-all duration-300 ease-in-out"
            i-ph-shopping-cart-duotone flex
          />
        </VFlexRow>
      </VFlexRow>
    </VFlexRow>

    <VFlexRow
      as="nav"
      class="z3 wfull"
      items="center"
      p="xl:x16 x4 b4"
    >
      <VFlexRow
        v-if="!pending"
        class="bg-p-b z10 hfull wfull"
        items="center"
        as="ul"
        justify="between"
      >
        <NuxtLink
          v-for="category in collections"
          :key="category.id"
          class="hfull wfull"
          flex="~ items-center justify-center"
          :to="`/${category.titleEn.toLowerCase()}`"
        >
          <span
            text="primary-text xl hover:strawberry dark:primary-text-dark dark:hover:banana"
            class="transition-all duration-300 ease-in-out"
            v-text="locale === 'en' ? category.titleEn : category.titleAr"
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
