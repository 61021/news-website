import { asSitemapUrl, defineSitemapEventHandler } from '#imports'
import type { PageResponse, Post } from '~/types'

export default defineSitemapEventHandler(async () => {
  // fetch data directly in the correct type
  const posts = await $fetch<PageResponse<Post>>('https://news.moshafer.com/api/collections/posts/records?page=1&perPage=500&skipTotal=1&sort=-created')

  const pages = await $fetch<PageResponse<Post>>('https://news.moshafer.com/api/collections/posts/records?page=1&perPage=500&skipTotal=1&sort=-created')
  return [
    ...posts.items,
    // map URLS as needed
    ...pages.items.map(p => asSitemapUrl({
      loc: p.id,
    })),
  ]
})
