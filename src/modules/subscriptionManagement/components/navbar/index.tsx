import { Divider, Flex } from '@chakra-ui/layout'
import { Icon } from '@iconify/react'
import { Container, Text } from 'components'

import { NavbarProps } from './types'

import { useHistory } from 'react-router-dom'
import { colors } from 'styles'

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
          style={{ textTransform: 'capitalize' }}
          fontWeight='500'
          fontSize='1.25rem'
          color={colors.generalText[colorMode]}
        >
          {text}
        </Text>
      </Flex>
    </Container>
  )
}

export { Navbar }

