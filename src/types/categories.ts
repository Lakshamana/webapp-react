import { Category } from 'generated/graphql'

export type CategoriesScrollerProps = {
  sectionTitle?: string
  sectionUrl?: string
  isLoading?: boolean
  items?: Maybe<Category[]>
  loadMoreItems?: () => void
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
  categoryUnpinned?: (categoryId: string) => void

}

type PostCardProps = {
  mobileBehavior?: boolean
  hover: boolean
  isLoading?: boolean
  isCategoryPinned: boolean
  isOpen?: boolean
  pinCategory: () => void
  unpinCategory: () => void
  actionHover: (status: boolean) => () => void
  defineAction?: () => void
  onClickCard: () => void
}

export type ComponentPostCardProps = CategoryPostCardProps & PostCardProps
