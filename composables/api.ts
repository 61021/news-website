import PocketBase from 'pocketbase'

export const baseUrl = 'https://news.moshafer.com'

export const pb = new PocketBase(baseUrl)

export function resolveUrl(item: any) {
  return `${baseUrl}/api/files/${item.collectionId}/${item.id}/${item.photo}`
}
