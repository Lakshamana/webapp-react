import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import {
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  PositionProps,
} from 'styled-system'

export interface LanguageSelectProps
  extends SpaceProps,
    LayoutProps,
    FlexboxProps,
    PositionProps {
  flagIcon?: ReactJSXElement
  locale?: string
  label?: string
}
