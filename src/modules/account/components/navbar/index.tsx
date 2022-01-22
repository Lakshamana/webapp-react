import { Icon } from '@iconify/react'
import { Flex } from '@chakra-ui/layout'
import { Container, Text, Link } from 'components'

import { NavbarProps } from './types'

import { colors } from 'styles'
import { pxToRem } from 'styles/metrics'

const Navbar = ({ colorMode, text }: NavbarProps) => (
  <Container width={1} mt={2} alignItems="center" mb={4}>
    <Link to="/home">
      <Flex alignItems="center">
        <Icon
          icon="mdi:arrow-left"
          width={20}
          color={colors.generalText[colorMode]}
        />
        <Text
          pl={2}
          fontWeight="500"
          fontSize={pxToRem(20)}
          color={colors.generalText[colorMode]}
        >
          {text}
        </Text>
      </Flex>
    </Link>
  </Container>
)

export { Navbar }
