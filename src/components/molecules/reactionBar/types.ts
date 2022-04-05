export type ReactionType = {
  name: string
  count: number
}

export type ReactionsCount = {
  postId: string | null | undefined
  totalReactions?: number | null | undefined
  reactions?: ReactionType[]
  myReactions?: ReactionType[]
}
