import { Comment } from 'generated/graphql'

type TypeOptions = 'REPORT' | 'EDIT' | 'DELETE'
export type typeOfCard = 'CARD' | 'REPLY'

export interface CommentType {
  username: string,
  createdAt: string,
  comment: string,
  userAvatar: string,
  answers?: CommentType[] | undefined
}

export interface IEditInput {
  id: string
  option: TypeOptions
}

export interface IProps extends Comment {
  typeOfCard: typeOfCard
  addComment: Function
  editComment: Function
  selectPopupOption: Function
  postId?: string
  newCommentLoading: boolean
  editedCommentLoading: boolean
}

export const defaultProps = {
  typeOfCard: 'CARD',
  username: '',
  createdAt: '',
  comment: '',
  answers: [],
  newCommentLoading: false,
  editedCommentLoading: false,
  deleteCommentLoading: false
};