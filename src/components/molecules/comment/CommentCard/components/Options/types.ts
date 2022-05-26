import { CommentVoteStats } from "generated/graphql"

type typeOfOptions = 'CARD' | 'REPLY'

export interface IProps {
  typeOfOptions?: typeOfOptions
  showReply: boolean
  setShowReply: any
  id: string
  description: string
  commentVoteStats: CommentVoteStats
  myVote: string
}

export interface IUpdateVotes {
  countUpvotes: number
  countDownvotes: number
}

export const defaultProps = {
  typeOfOptions: 'CARD'
};