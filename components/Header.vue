<script setup lang="ts">
import type { Category, PageResponse } from '~/types'

const { pending, data: similarPosts } = useApi<PageResponse<Category>>('categories/records', {
  params: {
    filter: `website="${websiteId}"`,
    sort: '-created',
    page: 1,
    perPage: 10,
    skipTotal: 1,
  },
})

const categories = computed(() => similarPosts.value?.items ?? [])

const searchRef = ref<HTMLInputElement | null>(null)

const isSearch = ref(false)

const searchQuery = ref('')

const router = useRouter()

function search() {
  if (searchQuery.value) {
    router.push({
      path: '/search',
      query: {
        q: searchQuery.value,
      },
    })
  }
}

function toggleSearch() {
  if (isSearch.value) {
    search()
  }
  else {
    isSearch.value = !isSearch.value
    setTimeout(() => {
      if (searchRef.value)
        searchRef.value.focus()
    }, 0)
  }
}
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

      <VFlexRow
        :gap="4"
        items="center"
      >
        <!-- <LanguageSwitcher /> -->

        <VFlexRow
          :class="isSearch ? 'bg-white ps4 py2 rounded-full lg:w100 gap4' : `${bgColors[appColor][900]}`"
          class="overflow-hidden duration-300"
          items="center"
          justify="end"
        >
          <input
            v-show="isSearch"
            ref="searchRef"
            v-model="searchQuery"
            type="search"
            class="wfull bg-transparent outline-none duration-300"
            @keydown.enter="search"
          >
          <button
            text="2xl"
            class="duration-300"
            i-ph-magnifying-glass-fill
            flex
            :class="isSearch ? `${textColors[appColor][800]} translate-x-4` : 'text-white'"
            @click="toggleSearch"
          />
        </VFlexRow>

        <DarkToggle />
      </VFlexRow>
    </VFlexRow>

    <VFlexRow
      bg="white dark:white/10"
      class="wfull overflow-x-auto shadow"
      py="6"
      px="xl:40 6"
      border="b slate200 dark:white/20"
    >
      <VFlexRow
        v-if="!pending"
        class="bg-p-b z10 hfull wfull"
        items="center"
        :gap="8"
        as="ul"
      >
        <NuxtLink
          flex="~ items-center justify-center"
          to="/home"
        >
          <span
            text="slate900 xl dark:white"
            :class="[$route.path === '/home' ? `${textColors[appColor][800]} font-bold` : '']"
            class="transition-all duration-300 ease-in-out"
            v-text="'الرئيسية'"
          />
        </NuxtLink>

        <NuxtLink
          v-for="category in categories"
          :key="category.id"
          flex="~ items-center justify-center"
          :to="`/categories/${category.id}`"
        >
          <span
            text="slate900 xl dark:white"
            :class="[$route.path.includes(category?.id?.toLowerCase()) ? `${textColors[appColor][700]} font-bold` : '']"
            class="transition-all duration-300 ease-in-out"
            v-text="category.name"
          />
        </NuxtLink>
        <NuxtLink
          v-for="category in categories"
          :key="category.id"
          flex="~ items-center justify-center"
          :to="`/categories/${category.id}`"
        >
          <span
            text="slate900 xl dark:white"
            :class="[$route.path.includes(category?.id?.toLowerCase()) ? `${textColors[appColor][700]} font-bold` : '']"
            class="transition-all duration-300 ease-in-out"
            v-text="category.name"
          />
        </NuxtLink>
        <NuxtLink
          v-for="category in categories"
          :key="category.id"
          flex="~ items-center justify-center"
          :to="`/categories/${category.id}`"
        >
          <span
            text="slate900 xl dark:white"
            :class="[$route.path.includes(category?.id?.toLowerCase()) ? `${textColors[appColor][700]} font-bold` : '']"
            class="transition-all duration-300 ease-in-out"
            v-text="category.name"
          />
        </NuxtLink>
      </VFlexRow>
    </VFlexRow>
  </VFlexCol>
</template>
