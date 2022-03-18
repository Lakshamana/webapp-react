import { BadgeProps } from '@chakra-ui/layout'
import { BadgeStyled } from './styles'

const Badge = ({ ...props }: BadgeProps) => {
  return <BadgeStyled display='flex' alignItems='center' px={3} fontSize={{base:'0.75rem', sm:'0.8rem'}} borderRadius='4px' fontWeight='bolder' {...props}></BadgeStyled>
}

export { Badge }
