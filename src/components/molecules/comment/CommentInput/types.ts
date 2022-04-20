export interface Props {
  editText?: string
  action: any
  setTotalComments?: any
  totalComments?: number
  postId: string
  parentId?: string
  actionLoading: boolean
  cancelAction?: any
}

export interface Payload {
  description: string
}
