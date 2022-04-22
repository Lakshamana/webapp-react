import { ImageProps } from '@chakra-ui/react'

export interface Props extends ImageProps {
  height?: number
  width?: string | string[] | number | number[]
  clickable?: boolean
}

export const defaultProps = {
  width: 140,
}
