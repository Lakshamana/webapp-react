import { Comment } from 'generated/graphql'

export interface CommentType {
  username: string,
  createdAt: string,
  comment: string,
  userAvatar: string,
  answers?: CommentType[] | undefined
}

export type typeOfCard = 'CARD' | 'REPLY'

export interface IProps extends Comment {
  typeOfCard: typeOfCard
  addComment?: any
  setTotalComments?: any
  totalComments?: number
  postId?: string
  addCommentLoading?: boolean
}

export const defaultProps = {
  typeOfCard: 'CARD',
  username: '',
  createdAt: '',
  comment: '',
  answers: [],
};