import { ReactionType } from "../../types"

export type PropsType = {
  myActiveReactions: ReactionType[] | undefined
  updateMyReaction: Function
}
