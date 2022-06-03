export interface Props {
  editText?: string
  action: Function
  postId: string
  parentId?: string
  actionLoading: boolean
  cancelAction?: Function
}

export interface Payload {
  description: string
}
