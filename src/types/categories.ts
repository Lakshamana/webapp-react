import { Category } from 'generated/graphql'

export type CategoriesScrollerProps = {
  sectionTitle?: string
  sectionUrl?: string
  hasMoreLink?: boolean
  items?: Category[]
}

export type CategoriesGridProps = {
  sectionTitle?: string
  items?: Category[]
}

export type CategoryPostCardProps = {
  id: string
  url?: string
  thumbnail?: string
  title?: string
  isNew?: string
  isPinned?: boolean
}
