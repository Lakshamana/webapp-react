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
  display,
  popoverTrigger,
  background,
  hasArrow,
  ...props
}: Props) => {
  const { colorMode } = useThemeStore()
  return (
    <ChakraPopover closeOnEsc {...props} arrowShadowColor={'transparent'} arrowSize={12} preventOverflow>
      <PopoverTrigger>{popoverTrigger}</PopoverTrigger>
      <PopoverContent
        bg={background || colors.cardBg[colorMode]}
        width={display === 'sidebar' ? 275 : 320}
      >
        {hasArrow && (
          <PopoverArrow backgroundColor={colors.cardBg[colorMode]} />
        )}
        <PopoverBody>{children}</PopoverBody>
      </PopoverContent>
    </ChakraPopover >
  )
}

export { Popover }
