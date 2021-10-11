export interface CommentType {
  userName: string,
  createdAt: string,
  comment: string
}

export const defaultProps = {
  userName: '',
  createdAt: '',
  comment: ''
};
  