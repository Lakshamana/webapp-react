import { PopoverTrigger, PopoverArrow } from '@chakra-ui/react'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'

import { PopoverStyled, PopoverContentStyled, PopoverBodyStyled } from './style'

import { Props } from './types'

const Popover = ({
  children,
  display,
  popoverTrigger,
  background,
  hasArrow,
  width,
  ...props
}: Props) => {
  const { colorMode } = useThemeStore()
  return (
    <PopoverStyled
      closeOnEsc
      arrowShadowColor={'transparent'}
      arrowSize={12}
      {...props}
    >
      <PopoverTrigger>{popoverTrigger}</PopoverTrigger>
      <PopoverContentStyled>
        {hasArrow && (
          <PopoverArrow backgroundColor={colors.cardBg[colorMode]} />
        )}
        <PopoverBodyStyled>{children}</PopoverBodyStyled>
      </PopoverContentStyled>
    </PopoverStyled>
  )
}

export { Popover }
