export interface Props {
  addComment: any
  setTotalComments?: any
  totalComments?: number
  postId: string
  parentId?: string
  addCommentLoading: boolean
}

export interface Payload {
  description: string
}
