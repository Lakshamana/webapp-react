export type MyReactionType = {
  name: string
}

export type ReactionType = {
  name: string
  count: number
}

export type ReactionsCount = {
  postId: string | null | undefined
  totalReactions?: number
  reactions?: ReactionType[]
  myReactions: MyReactionType[]
  removeMyReaction: Function
  addMyReaction: Function
  setNewReaction?: Function
}

export type ReactionProps = {
  myReaction: boolean
}

export type UpdateReactionMode = 'INCREASE' | 'DECREASE'
