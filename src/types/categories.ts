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
  isExclusive?: boolean
  isGeolocked?: boolean
  hover?: boolean
  categoryUnpinned?: (categoryId: string) => void
}

type PostCardProps = {
  mobileBehavior?: boolean
  actionHover: (status: boolean) => () => void
  defineAction: () => void
}

export type ComponentPostCardProps = CategoryPostCardProps & PostCardProps