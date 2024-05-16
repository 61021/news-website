<script setup lang="ts">
const banners = ref([
  '/images/banners/1.png',
  '/images/banners/2.png',
])
</script>

<template>
  <VFlexCol
    bg="strawberry"
    class="wfull md:h120"
    items="center"
    justify="center"
    px="4"
  >
    <Swiper
      class="hfull wfull"
      :modules="[SwiperAutoplay]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide
        v-for="banner in banners"
        :key="banner"
        class="hfull wfull"
        flex="~ items-center justify-center"
      >
        <VImage
          class="h70% wfull object-contain"
          :src="banner"
        />
      </SwiperSlide>
    </Swiper>
  </VFlexCol>
</template>
