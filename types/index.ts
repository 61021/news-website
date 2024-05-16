export type Product = {
  id: number
  titleAr: string
  titleEn: string
  descriptionAr: string
  descriptionEn: string
  media: string[]
  variants: Variant[]
} & Default

export interface Variant {
  id: number
  name: ''
  conditions: Condition[]
}

export interface Condition {
  id: string
  name: 'NEW' | 'OPEN_BOX' | 'PRE_OWNED'
  price: number
  compare_at_price: number
  quantity: number
  weight: number
  cost_per_item: number
  barcode: number
  sku: string
  country_of_origin: string
  vendor: string
}

interface Default {
  created: string
  updated: string
  collectionId: string
  collectionName: string
}

export type Collection = {
  id: string
  titleAr: string
  titleEn: string
  expand: {
    products: Product[]
  }
} & Default
