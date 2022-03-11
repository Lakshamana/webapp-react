export type ReactionType = {
  name: string
  count: number
}

export type ReactionsCount = {
  totalReactions?: number | null | undefined
  reactions?: ReactionType[]
  myReactions?: ReactionType[]
}
