<script setup lang="ts">
import type { ListResult } from 'pocketbase'
import type { Post } from '~/types'

const routeName = ref(useRoute('posts-name').params.name)

const posts = ref<Post[]>([])

const pending = ref(false)

async function getPosts() {
  pending.value = true
  const records: ListResult<Post> = await pb.collection('posts').getList(1, 15, {
    filter: `name ?~ '${routeName.value}'`,
    sort: '-created',
  })

  posts.value = records.items
  pending.value = false
}

getPosts()
</script>

<template>
  <div v-if="posts.length > 0 && !pending">
    <pre v-text="posts" />
  </div>
</template>
