export function formatPrice(price: number | string) {
  const stringPrice = price.toString()

  return `${stringPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ${useNuxtApp().$i18n.t('products.price.currency')}`
}
