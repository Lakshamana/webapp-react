export interface CommentType {
  username: string,
  createdAt: string,
  comment: string,
  userAvatar: string,
  answers?: CommentType[] | undefined
}

export const defaultProps = {
  username: '',
  createdAt: '',
  comment: '',
  answers: [],
};
  