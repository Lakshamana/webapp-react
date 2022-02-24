import { ColorMode } from 'types/common'

export interface PropsChannelSearch {
  search: string
  onChange: () => void
  colorMode: ColorMode
}
