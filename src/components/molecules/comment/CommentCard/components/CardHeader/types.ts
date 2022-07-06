import { CommentAuthor } from 'generated/graphql'

export interface IProps {
  id: string
  authorId: string
  author?: CommentAuthor
  createdAt: Date
  action: any
}

export interface IOption {
  icon: string
  text: string
  action: string
}