<script setup lang="ts">
import type { PageResponse, Post } from '~/types'

const { pending, data } = useApi<PageResponse<Post>>('posts/records', {
  params: {
    filter: `websites ?~ '${websiteId}'`,
    sort: '-created',
    page: 1,
    perPage: 10,
    skipTotal: 1,
  },
})

const posts = computed(() => data.value?.items ?? [])

const firstFivePosts = computed(() => posts.value.slice(0, 5))
const postsExceptFirstFive = computed(() => posts.value.slice(5))
</script>

<template>
  <VFlexCol
    :gap="8"
  >
    <VFlexRow
      v-if="!pending && posts.length > 0"
      class="h200 wfull"
      :gap="8"
    >
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination, SwiperNavigation]"
        bg="white"
        class="relative hfull w70% shadow overflow-hidden! rounded-xl!"
        :slides-per-view="1"
        :loop="true"
        pagination
        navigation
        :autoplay="{
          delay: 3000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide
          v-for="post in firstFivePosts"
          :key="post.id"
          class="overflow-hidden! rounded-xl!"
        >
          <NuxtLink
            class="overflow-hidden! rounded-xl!"
            :to="`/posts/${post.title}`"
          >
            <img
              class="absolute left-0 top-0 hfull wfull object-cover"
              :src="resolveUrl(post)"
            >

            <VFlexCol
              class="absolute bottom-0 left-0 z2 h40 wfull rounded-xl rounded-b-xl bg-black/50 backdrop-blur-sm"
              px="8"
              py="6"
            >
              <h3
                text="3xl white"
                class="line-clamp-2 font-bold"
                v-text="post.title"
              />
            </VFlexCol>
          </NuxtLink>
        </SwiperSlide>
      </Swiper>

      <VFlexCol
        :gap="4"
        class="hfull w30% overflow-y-auto rounded-xl shadow"
        bg="white dark:white/10"
        p="6"
      >
        <h2
          text="xl:2xl"
          class="mb-2 font-bold"
          :class="textColors[appColor][900]"
          v-text="'اخر الأخبار'"
        />
        <CardsMain
          v-for="post in postsExceptFirstFive"
          :key="post.id"
          :post="post"
          type="horizontal"
        />
      </VFlexCol>
    </VFlexRow>

    <VContainedLoader v-else-if="pending" />
  </VFlexCol>
</template>
