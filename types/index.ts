export type Post = Default & {
  title: string
  description: string
  content: string
  photo: string
}

export type Website = Default & {
  name: string
  number: number
  expand: {
    posts: Post[]
  }
}

export type Category = Default & {
  name: string
  route: string
  expand: {
    posts: Post[]
  }
  website: string
}

interface Default {
  id: string
  created: string
  updated: string
  collectionId: string
  collectionName: string
}
