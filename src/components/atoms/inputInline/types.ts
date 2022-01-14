import { LayoutProps, SpaceProps, FontSizeProps } from 'styled-system'
import { InputProps } from '@chakra-ui/react'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// interface SomeChange extends Change, Omit<SomeChangeExtension, 'foo' | 'amount'> {
export interface Props extends LayoutProps, SpaceProps, FontSizeProps {
  value?: string
  onChange: any
  placeholder?: string
  mask?: any
  type?: string
  hasBorder?: boolean
  focus?: boolean
  error?: boolean
  errorMessage?: string
  onKeyDown?: any
  onBlur?: any
  name?: string

  background?: string
  inverted?: boolean
  color?: string
  placeholderColor?: string
  placeholderFontStyle?: string

  autocomplete?: string
}
