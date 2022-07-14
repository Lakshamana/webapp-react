export type SearchResultType =
  | 'SearchCategory'
  | 'SearchPost'
  | 'SearchLiveEvent'

export type SearchCardProps = {
  id: string
  url?: string
  thumbnail?: string
  title?: string
  description?: Maybe<string>
  isExclusive?: boolean
  type?: SearchResultType
}
