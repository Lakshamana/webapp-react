import { Post } from 'generated/graphql'

export type Props = {
  isLoading: boolean
  onReachEnd: function
  sectionTitle?: string
  sectionUrl?: string
  rows: Post[]
}
