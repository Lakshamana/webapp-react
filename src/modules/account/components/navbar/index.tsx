import { Icon } from '@iconify/react'
import { Container, Text, Link } from 'components'

import { NavbarProps } from './types'

import { colors } from 'styles'
import { pxToRem } from 'styles/metrics'
import { BackTextBox, WrapperIcon } from '../../styles'

const Navbar = ({ colorMode, text }: NavbarProps) => (
  <Container width={1} mt={2} alignItems="center" mb={4}>
    <WrapperIcon>
      <Link to="/home">
        <Icon
          icon="mdi:arrow-left"
          width={20}
          color={colors.generalText[colorMode]}
        />
      </Link>
    </WrapperIcon>
    <BackTextBox ml={2} px={2}>
      <Text
        fontWeight="bold"
        fontSize={pxToRem(20)}
        color={colors.generalText[colorMode]}
      >
        {text}
      </Text>
    </BackTextBox>
  </Container>
)

export { Navbar }
