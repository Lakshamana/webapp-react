interface IAuthor {
  username?: Maybe<string>
}

export interface IProps {
  author?: IAuthor
  createdAt: Date
}

export interface IOption {
  icon: string
  text: string
}