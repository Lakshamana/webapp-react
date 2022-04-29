import { MyReactionType } from "../../types"

export type UpdateReactions = {
  reaction: string
  isLoading: boolean
}

export type PropsType = {
  updateReactions: UpdateReactions
  myActiveReactions: MyReactionType[]
  updateMyReaction: Function
}
