import { Icon } from '@iconify/react'
import { Flex, Divider } from '@chakra-ui/layout'
import { Container, Text, Link } from 'components'

import { NavbarProps } from './types'

import { colors } from 'styles'

const Navbar = ({ colorMode, text }: NavbarProps) => (
  <Container width={1} mt={1} alignItems="center" mb={2}>
    <Link to="/home">
      <Flex alignItems="center">
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
    </Link>
  </Container>
)

export { Navbar }
