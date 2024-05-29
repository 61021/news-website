import type { PageResponse, Post } from '~/types'
import { baseUrl } from '~/composables/api'

export default defineSitemapEventHandler(async () => {
  const posts = await $fetch<PageResponse<Post>>(`${baseUrl}/api/collections/posts/records?page=1&perPage=500&skipTotal=1`)
    .then((posts) => {
      return posts.items.map(p => ({
        loc: p.title,
        _sitemap: 'posts',
        lastmod: p.updated,
      }))
    })

  return posts
})
