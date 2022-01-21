import {
  Popover as ChakraPopover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'

import { Props } from './types'

const Popover = ({
  children,
  popoverTrigger,
  background,
  hasArrow,
  ...props
}: Props) => {
  const { colorMode } = useThemeStore()
  return (
    <ChakraPopover closeOnEsc {...props} arrowShadowColor={'transparent'} arrowSize={12} preventOverflow>
      <PopoverTrigger>{popoverTrigger}</PopoverTrigger>
      <PopoverContent bg={background || colors.cardBg[colorMode]}>
        {hasArrow && (
          <PopoverArrow backgroundColor={colors.cardBg[colorMode]} />
        )}
        <PopoverBody>{children}</PopoverBody>
      </PopoverContent>
    </ChakraPopover>
  )
}

export { Popover }
