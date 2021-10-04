type VoteType = 'upvote' | 'downvote';

export interface VoteProps {
  type: VoteType,
  votes: string
}

export const defaultProps = {
  type: '',
  votes: ''
};
