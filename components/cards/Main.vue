<script setup lang="ts">
import type { Post } from '~/types'

defineProps<{
  post: Post
  type?: 'vertical' | 'horizontal'
  date?: boolean
  description?: boolean
}>()
</script>

<template>
  <NuxtLink
    class="flex overflow-hidden rounded-xl shadow duration-300 hover:shadow-lg"
    border="~ slate200 hover:slate400"
    bg="white dark:white/10"
    :class="[type === 'horizontal' ? 'flex-row! h40' : 'flex-col! h120']"
    :to="`/posts/${post.id}`"
  >
    <img
      class="object-cover"
      :src="resolveUrl(post)"
      :class="type === 'horizontal' ? 'w30%! rounded-e-xl' : 'wfull h50% rounded-b-xl'"
    >

    <VFlexCol
      p="y4 b6 x6"
      :gap="2"
      :class="type === 'horizontal' ? 'w70%!' : ' h50%'"
    >
      <h3
        text="xl"
        class="line-clamp-2"
        v-text="post.title"
      />

      <h4
        v-if="description"
        class="line-clamp-2"
        v-text="post.description"
      />

      <VFlexRow
        v-if="date"
        :gap="2"
        items="center"
        mt="2"
      >
        <i
          i-ph-calendar-fill
          text="xl:xl lg slate400"
        />

        <span v-text="formatDate(post.created)" />
      </VFlexRow>

      <VFlexRow
        class="mt-auto"
        items="center"
        :gap="1"
      >
        <span
          :class="textColors[appColor][800]"
          class="font-bold"
          v-text="'قراءة الخبر'"
        />

        <i
          i-ph-caret-left
          :class="textColors[appColor][800]"
        />
      </VFlexRow>
    </VFlexCol>
  </NuxtLink>
</template>
