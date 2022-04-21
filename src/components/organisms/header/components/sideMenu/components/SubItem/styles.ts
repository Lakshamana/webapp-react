import styled, { css } from 'styled-components'
import { Icon } from "@iconify/react";
import { layout } from 'styled-system'

interface IconContainerProps {
  open: boolean
}

export const IconContainer = styled(Icon) <IconContainerProps>`
  ${layout}
  ${({ open }) =>
    open
      ? css`
          transform: rotate(180deg);
          transition: ease-in 0.25s;
        `
      : css`
          transition: ease-in 0.25s;
        `}
`