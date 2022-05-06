type typeOfOptions = 'CARD' | 'REPLY'

export interface IProps {
  typeOfOptions?: typeOfOptions
  showReply: boolean
  setShowReply: any
  id: string
  description: string
  countUpVotes?: number
}

export const defaultProps = {
  typeOfOptions: 'CARD'
};