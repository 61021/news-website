<script setup lang="ts">
import type { PageResponse, Post } from '~/types'

const routeId = ref(useRoute('categories-id').params.id)

const { pending, data } = useApi<PageResponse<Post>>('posts/records', {
  server: false,
  params: {
    filter: `categories ?~ '${routeId.value}'`,
    sort: '-created',
  },
})

const posts = computed(() => data.value?.items ?? [])
</script>

<template>
  <VFlexCol
    :gap="4"
    class="relative min-h80vh"
    px="xl:40 6"
    mt="6 xl:12"
  >
    <div
      v-if="!pending && posts.length > 0"
      grid="~ sm:cols-2 2xl:cols-4 gap8"
    >
      <CardsMain
        v-for="post in posts"
        :key="post.id"
        :post="post"
        date
        description
      />
    </div>

    <VContainedLoader v-else-if="pending" />

    <VNoData v-else />
  </VFlexCol>
</template>
