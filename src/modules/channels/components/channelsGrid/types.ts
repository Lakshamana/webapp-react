import { Channel } from 'generated/graphql'

export interface Props {
  channelsList: Channel[]
  channelSelected: (id: string | null) => void
}
