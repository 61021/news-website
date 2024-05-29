export const baseUrl = 'https://news.moshafer.com'

export function resolveUrl(item: any) {
  return `${baseUrl}/api/files/${item.collectionId}/${item.id}/${item.photo}`
}
