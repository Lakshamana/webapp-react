import { ChannelProps } from 'types/channel'

export interface Props extends ChannelProps {
  onSelectChannel: (id: string | null) => void
}
