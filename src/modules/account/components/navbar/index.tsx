import { Icon } from '@iconify/react'
import { Flex, Divider } from '@chakra-ui/layout'
import { Container, Text } from 'components'

import { NavbarProps } from './types'

import { colors } from 'styles'
import { useHistory } from 'react-router-dom'

const Navbar = ({ colorMode, text }: NavbarProps) => {
  let history = useHistory()
  return (
    <Container width={1} mt={1} alignItems="center" mb={2}>
      <Flex alignItems="center" onClick={history.goBack} cursor="pointer">
        <Icon
          icon="mdi:arrow-left"
          width={20}
          color={colors.generalText[colorMode]}
        />
        <Divider
          orientation="vertical"
          height={4}
          ml={2}
          mr={3}
          color={colors.grey['700']}
        />
        <Text
          style={{ textTransform: 'uppercase' }}
          fontWeight={'600'}
          fontSize={'1.05rem'}
          color={colors.generalText[colorMode]}
        >
          {text}
        </Text>
      </Flex>
    </Container>
  )
}

export { Navbar }
