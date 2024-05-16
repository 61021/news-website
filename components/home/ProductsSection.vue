<script setup lang="ts">
import type { Collection, Condition, Product, Variant } from '~/types'

const collection = ref<Collection | null>(null)
const pending = ref(true)

async function getProducts() {
  pending.value = true
  const records: Collection = await pb.collection('collections').getOne('5y85f62zjt9ws8n', {
    expand: 'products',
  })

  collection.value = records
  pending.value = false
}

getProducts()

const { locale } = useI18n()

function calculateStartingPrice(product: Product) {
  return product.variants.reduce((acc, variant: Variant) => {
    const price = variant.conditions.reduce((acc, condition: Condition) => {
      return Math.min(acc, condition.price)
    }, Number.POSITIVE_INFINITY)

    return Math.min(acc, price)
  }, Number.POSITIVE_INFINITY)
}

function checkIfSoldOut(product: Product) {
  return product.variants.every((variant: Variant) => {
    return variant.conditions.every((condition: Condition) => {
      return condition.quantity === 0
    })
  })
}

function isDiscounted(product: Product) {
  return product.variants.some((variant: Variant) => {
    return variant.conditions.some((condition: Condition) => {
      return condition.compare_at_price < condition.price
    })
  })
}
</script>

<template>
  <VFlexCol
    v-if="!pending && collection"
    mt="xl:16"
    p="xl:x16 x4"
    :gap="8"
  >
    <h2
      text="xl:5xl"
      class="font-bold"
      v-text="locale === 'ar' ? collection.titleAr : collection.titleEn"
    />

    <div
      grid="~ md:cols-2 xl:cols-4 gap-8"
    >
      <VFlexCol
        v-for="product in collection.expand.products"
        :key="product.id"
        :border="isDiscounted(product) ? 'banana' : 'strawberry'"
        class="overflow-hidden border-4 rounded-2rem"
      >
        <VFlexCol
          class="relative h80 overflow-hidden rounded-3xl"
          :bg="isDiscounted(product) ? 'banana' : 'strawberry'"
          items="center"
          justify="center"
        >
          <img
            class="h80% wfull object-contain"
            :src="`${baseUrl}/api/files/${product.collectionId}/${product.id}/${product.media[0]}`"
          >

          <span
            v-if="checkIfSoldOut(product)"
            class="absolute bottom-4 right-4 font-bold"
            text="on-strawberry xl"
            v-text="$t('products.soldOut')"
          />

          <span
            v-if="isDiscounted(product)"
            class="absolute bottom-4 left-4 font-bold"
            text="on-strawberry xl"
            v-text="$t('products.free')"
          />
        </VFlexCol>

        <VFlexCol
          p="y4 b6 x6"
          :gap="2"
        >
          <h3
            text="3xl"
            v-text="locale === 'ar' ? product.titleAr : product.titleEn"
          />

          <span v-text="`${$t('products.price.startingFrom')} ${formatPrice(calculateStartingPrice(product))} `" />
        </VFlexCol>
      </VFlexCol>
    </div>
  </VFlexCol>
</template>
