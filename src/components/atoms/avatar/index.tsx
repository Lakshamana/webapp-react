import { Avatar as ChakraAvatar } from '@chakra-ui/react'
import { Props } from './types'

const Avatar = ({ ...props }: Props) => {
  return <ChakraAvatar {...props}></ChakraAvatar>
}

export { Avatar }
