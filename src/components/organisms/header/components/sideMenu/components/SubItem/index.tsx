import { colors } from 'styles'
import { Text, Flex, Container, useDisclosure, Collapse } from '@chakra-ui/react'
import { useThemeStore } from 'services/stores/theme'
import { IProps } from './types'
import { IconContainer } from './styles'

const SubItem = ({ name, children, redirectTo }: IProps) => {
  const { colorMode } = useThemeStore()
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Flex
        py={3}
        cursor={'pointer'}
        textTransform={'uppercase'}
        alignItems={'center'}
        onClick={onToggle}
      >
        <Text
          mr={2}
          color={colors.generalText[colorMode]} >
          {name}
        </Text>
        <IconContainer
          open={isOpen}
          color={colors.generalText[colorMode]}
          icon="akar-icons:chevron-down"
        />
      </Flex>
      {
        children.map(subItem => (
          <Collapse in={isOpen} animateOpacity>
            <Container
              py={2}
              cursor={'pointer'}
              bgColor={colors.headerBg[colorMode]}
              onClick={redirectTo(subItem.route)}
            >
              <Text
                textTransform={'uppercase'}
                color={colors.generalText[colorMode]}
              >
                {subItem.name}
              </Text>
            </Container>
          </Collapse>
        ))}
    </>
  )
}

export { SubItem }
