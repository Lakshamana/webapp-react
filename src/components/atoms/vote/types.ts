type VoteType = 'upvote' | 'downvote';

export interface VoteProps {
  type: VoteType,
  votes: number
}

export const defaultProps = {
  type: '',
  votes: ''
};
