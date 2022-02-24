import { Avatar as ChakraAvatar } from '@chakra-ui/react'
import { Props } from './types'

const Avatar = ({ ...props }: Props) => {
  return <ChakraAvatar loading="eager" {...props}></ChakraAvatar>
}

export { Avatar }
