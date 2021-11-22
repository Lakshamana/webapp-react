import { Icon } from '@iconify/react'
import { Container, Text } from 'components'

import { colors } from 'styles'
import { NavbarProps } from './types'
import { BackTextBox, WrapperIcon } from '../../styles'

const Navbar = ({ onClick, colorMode, text }: NavbarProps) => (
  <Container width={1} alignItems="center" mt={2} mb={4}>
    <WrapperIcon>
      <Icon
        icon="mdi:arrow-left"
        width={20}
        color={colors.generalText[colorMode]}
        {...{ onClick }}
      />
    </WrapperIcon>
    <BackTextBox ml={2} px={2}>
      <Text fontWeight="bold" color={colors.generalText[colorMode]}>
        {text}
      </Text>
    </BackTextBox>
  </Container>
)

export { Navbar }
