<script setup lang="ts">
import type { ListResult } from 'pocketbase'
import type { Post } from '~/types'

const route = ref(useRoute('search'))
const queryKey = route.value.query.q

const posts = ref<Post[]>([])

const pending = ref(false)

async function getPosts() {
  pending.value = true
  const records: ListResult<Post> = await pb.collection('posts').getList(1, 15, {
    filter: `websites ?~ '${websiteId}' && title ?~ '${queryKey}'`,
    sort: '-created',
  })

  posts.value = records.items
  pending.value = false
}

getPosts()

onMounted(() => {
  getPosts()
})
</script>

<template>
  <VFlexCol
    :gap="4"
    class="hfull"
    px="xl:40 6"
    mt="6 xl:12"
  >
    <h2
      text="xl:2xl"
      class="mb-2 font-bold"
      :class="textColors[appColor][900]"
      v-text="'نتائج البحث'"
    />
    <div grid="~ sm:cols-2 xl:cols-4">
      <CardsMain
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </VFlexCol>
</template>
