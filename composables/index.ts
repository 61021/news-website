export function formatPrice(price: number | string) {
  const stringPrice = price.toString()

  return `${stringPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ${useNuxtApp().$i18n.t('products.price.currency')}`
}

export function formatDate(date: string) {
  const d = new Date(date)
  return `${d.toLocaleDateString()} - ${d.toLocaleTimeString().replace('AM', 'صباحاً').replace('PM', 'مساءً')}`
}
