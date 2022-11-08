import { TagOutput } from 'generated/graphql'
import { HomeCarouselsTypes } from './common'

export type TagsScrollerProps = {
  sectionTitle?: string
  sectionUrl?: string
  isLoading?: boolean
  tagContent?: TagOutput[]
  tagData: any
  content?: HomeCarouselsTypes[]
}

export type TagScrollerItem = {
  id: string
  slug?: Maybe<string>
  title?: string
  description?: Maybe<string>
  duration?: string | Maybe<number>
  isExclusive: boolean
  thumbnail?: string
  isPinned?: boolean
  type?: string
  url?: string
  __typename?: string
}
