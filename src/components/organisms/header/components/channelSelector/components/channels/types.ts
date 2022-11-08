import { Channel } from 'generated/graphql'
import { ColorMode } from 'types/common'

export interface PropsChannels {
  channels: Channel[]
  selected: Maybe<Channel>
  onSelect: any
  colorMode: ColorMode
  isLoading?: boolean
}
