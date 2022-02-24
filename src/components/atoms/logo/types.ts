import { ImageProps } from '@chakra-ui/react'

export interface Props extends ImageProps {
  height?: number
  width?: string | string[] | number | number[]
}

export const defaultProps = {
  width: 140,
}
