import { CommentVoteStats } from "generated/graphql"

type typeOfOptions = 'CARD' | 'REPLY'

export interface IProps {
  typeOfOptions?: typeOfOptions
  showReply: boolean
  setShowReply: any
  id: string
  description: string
  commentVoteStats: CommentVoteStats
}

export interface IUpdateVotes {
  countUpvotes: number
  countDownvotes: number
}

export const defaultProps = {
  typeOfOptions: 'CARD'
};