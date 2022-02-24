import { ChannelProps } from 'types/channel'

export interface Props {
    channelsList: ChannelProps[]
    channelSelected: (id: string) => void
}