import { Channel } from 'generated/graphql'
import { ColorMode } from 'types/common'

export interface PropsChannels {
  channels: Channel[]
  selected: Channel | null
  onSelect: any
  colorMode: ColorMode
  isLoading?: boolean
}
