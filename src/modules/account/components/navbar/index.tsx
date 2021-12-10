import { Icon } from '@iconify/react'
import { Container, Text, Link } from 'components'
import { colors } from 'styles'
import { NavbarProps } from './types'
import { BackTextBox, WrapperIcon } from '../../styles'

const Navbar = ({ colorMode, text }: NavbarProps) => (
  <Container width={1} mt={2} alignItems="center" mb={4}>
    <WrapperIcon>
      <Link toRoute="/home">
        <Icon
          icon="mdi:arrow-left"
          width={20}
          color={colors.generalText[colorMode]}
        />
      </Link>
    </WrapperIcon>
    <BackTextBox ml={2} px={2}>
      <Text fontWeight="bold" color={colors.generalText[colorMode]}>
        {text}
      </Text>
    </BackTextBox>
  </Container>
)

export { Navbar }
