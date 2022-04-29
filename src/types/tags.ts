import { TagOutput } from 'generated/graphql'
import { HomeCarouselsTypes } from './common'

export type TagsScrollerProps = {
  sectionTitle?: string
  sectionUrl?: string
  hasMoreLink?: boolean
  tagContent?: TagOutput[]
  tagID?: string
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
  url?: string
  __typename?: string
}
