type VoteType = 'UPVOTE' | 'DOWNVOTE' | 'NOVOTE'

export interface VoteProps {
  type: VoteType
  votes: number
  myVote: string
}

export const defaultProps = {
  type: '',
  votes: ''
};
