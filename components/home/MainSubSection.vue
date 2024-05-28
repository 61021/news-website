<script setup lang="ts">
import type { ListResult } from 'pocketbase'
import type { Category, Post, Website } from '~/types'

const posts = ref<Post[]>([])
const pending = ref(true)

// async function getPostsByCategory() {
//   pending.value = true
//   const records: Category[] = await pb.collection('categories').getFullList({
//     sort: '-created',
//     expand: 'posts',
//     filter: `website="${websiteId}"`,
//   })

//   news.value = records[0].expand.posts
//   pending.value = false
// }

// async function getWebsite() {
//   pending.value = true
//   const records: Website = await pb.collection('websites')
//     .getFirstListItem(`id="${websiteId}"`, {
//       expand: 'posts',
//     })

//   news.value = records.expand.posts
//   pending.value = false
// }

async function getPosts() {
  pending.value = true
  const records: ListResult<Post> = await pb.collection('posts').getList(1, 15, {
    filter: `websites ?~ '${websiteId}'`,
    sort: '-created',
  })

  posts.value = records.items
  pending.value = false
}

getPosts()

const firstFivePosts = computed(() => posts.value.slice(0, 5))
const postsExceptFirstFive = computed(() => posts.value.slice(5))
</script>

<template>
  <VFlexCol
    v-if="!pending && posts.length > 0"
    :gap="8"
  >
    <VFlexRow
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
          <VFlexCol
            class="overflow-hidden! rounded-xl!"
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
          </VFlexCol>
        </SwiperSlide>
      </Swiper>

      <VFlexCol
        :gap="4"
        class="hfull w30% overflow-y-auto rounded-xl shadow"
        bg="white"
        p="6"
      >
        <h2
          text="xl:2xl"
          class="mb-2 font-bold"
          :class="textColors[appColor][900]"
          v-text="'اخر الأخبار'"
        />
        <VFlexRow
          v-for="post in postsExceptFirstFive"
          :key="post.id"
          class="h40 overflow-hidden rounded-xl shadow"
          border="~ slate200"
        >
          <img
            class="hfull w40 rounded-e-xl object-cover"
            :src="resolveUrl(post)"
          >

          <VFlexCol
            p="y4 b6 x6"
            :gap="2"
          >
            <h3
              text="xl"
              class="line-clamp-3"
              v-text="post.title"
            />
          </VFlexCol>
        </VFlexRow>
      </VFlexCol>
    </VFlexRow>
  </VFlexCol>
</template>
