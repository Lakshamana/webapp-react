import { Category, LiveEvent, Post } from 'generated/graphql'

export type Props = {
  contentSlug: string
  contentType: ContentType
  accessGranted: () => void
}

type ContentType = 'post' | 'liveEvent' | 'category'

export type ElegibleContent = Post | LiveEvent | Category