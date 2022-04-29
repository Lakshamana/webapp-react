import { Channel } from 'generated/graphql'
import { ColorMode } from 'types/common'
import { ChannelStorageData } from 'types/channel'

export interface PropsChannels {
  channels: Channel[]
  selected: ChannelStorageData | null
  onSelect: any
  colorMode: ColorMode
  isLoading?: boolean
}
