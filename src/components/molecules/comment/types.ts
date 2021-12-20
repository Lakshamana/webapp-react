export interface CommentType {
  userName: string,
  createdAt: string,
  comment: string,
  answers?: CommentType[] | undefined
}

export const defaultProps = {
  userName: '',
  createdAt: '',
  comment: '',
  answers: [],
};
  