import { colors } from 'styles'
import { Text, Flex } from '@chakra-ui/react'
import { useThemeStore } from 'services/stores/theme'
import { IProps } from './types'

const DefaultItem = ({ action, name }: IProps) => {
  const { colorMode } = useThemeStore()

  return (
    <Flex
      py={3}
      cursor={'pointer'}
      textTransform={'uppercase'}
      alignItems={'center'}
      onClick={action}
    >
      <Text
        mr={2}
        color={colors.generalText[colorMode]} >
        {name}
      </Text>
    </Flex>
  )
}

export { DefaultItem }
