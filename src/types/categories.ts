import { Category } from 'generated/graphql'

export type CategoriesScrollerProps = {
  sectionTitle?: string
  sectionUrl?: string
  hasMoreLink?: boolean
  items?: Maybe<Category[]>
}

export type CategoriesGridProps = {
  sectionTitle?: string
  items?: Maybe<Category[]>
  sendUnpinEvent?: (categoryId: string) => void
}

export type CategoryPostCardProps = {
  id: string
  url?: string
  thumbnail?: string
  postsCount?: number
  title?: string
  description?: Maybe<string>
  isNew?: string
  isPinned?: boolean
  categoryUnpinned?: (categoryId: string) => void
}
