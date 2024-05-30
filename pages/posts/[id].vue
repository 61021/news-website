<script setup lang="ts">
import type { PageResponse, Post } from '~/types'

const routeName = ref(useRoute('posts-id').params.id)

const { data } = useApi<PageResponse<Post>>('posts/records', {
  params: {
    filter: `title="${routeName.value}"`,
    skipTotal: 1,
  },
})

const post = computed(() => data.value?.items[0])

const { pending, data: similarPosts } = useApi<PageResponse<Post>>('posts/records', {
  server: false,
  params: {
    filter: `websites ?~ '${websiteId}'`,
    sort: '-created',
    page: 1,
    perPage: 10,
    skipTotal: 1,
  },
})

const posts = computed(() => similarPosts.value?.items ?? [])

const { width } = useWindowSize()

const isMobile = computed(() => width.value < 768)

useHead({
  title: post.value?.title,
})
</script>

<template>
  <div
    v-if="post && !pending"
    px="xl:40 6"
    mt="xl:12 6"
    flex="~ col"
    :gap="8"
  >
    <VFlexCol :gap="4">
      <h1
        :class="textColors[appColor][800]"
        text="xl:5xl 4xl"
        class="font-bold leading-normal!"
        v-text="post.title"
      />

      <VFlexRow>
        <!-- <span v-for="category in post." /> -->
      </VFlexRow>
    </VFlexCol>
    <a
      :href="resolveUrl(post)"
      target="_blank"
    >

      <img
        :src="resolveUrl(post)"
        class="aspect-video wfull rounded-3xl object-cover xl:max-h200"
      >
    </a>

    <VFlexRow
      :gap="4"
      items="center"
      justify="between"
    >
      <VFlexRow
        :gap="2"
        items="center"
      >
        <i
          i-ph-calendar-fill
          text="xl:3xl 2xl"
        />

        <span
          text="xl:lg"
          class="font-bold"
          v-text="formatDate(post.created)"
        />
      </VFlexRow>

      <VButton
        icon="i-ph-share-network-fill"
        text="مشاركة"
      />
    </VFlexRow>

    <VFlexCol :gap="4">
      <div
        class="format"
        v-html="post.content.replace('http://31.220.80.211:2004', baseUrl)"
      />
    </VFlexCol>

    <h4
      text="3xl"
      :class="textColors[appColor][900]"
      class="font-bold"
      mt="6 2xl:8"
      v-text="'اخبار مشابهة'"
    />

    <Swiper
      v-if="posts.length > 0"
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination, SwiperNavigation]"
      class="relative z2 hfull wfull"
      :slides-per-view="isMobile ? 1 : 4"
      :loop="true"
      :space-between="isMobile ? 8 : 32"
      pagination
      navigation
      :autoplay="{
        delay: 3000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide
        v-for="post in posts"
        :key="post.id"
        class="relative overflow-hidden! rounded-xl!"
      >
        <CardsMain
          :post="post"
          description
          date
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
.format h1 {
  @apply text-6xl! my-4!;
}

.format h2 {
  @apply text-5xl! my-4!;
}

.format h3 {
  @apply text-4xl! my-4!;
}

.format h4 {
  @apply text-3xl! my-4!;
}

.format h5 {
  @apply text-2xl! my-4!;
}

.format h6 {
  @apply text-xl! my-4!;
}

.format ul {
  @apply list-inside! list-circle! ms-4!;
}

.format p,
.format li {
  @apply leading-relaxed! lg:text-xl! text-lg;
}

.format img {
  @apply rounded-lg! my-8!;
}
</style>
