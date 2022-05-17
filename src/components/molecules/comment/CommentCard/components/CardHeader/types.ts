interface IAuthor {
  username?: Maybe<string>
}

export interface IProps {
  id: string
  authorId: string
  author?: IAuthor
  createdAt: Date
  action: any
}

export interface IOption {
  icon: string
  text: string
  action: string
}