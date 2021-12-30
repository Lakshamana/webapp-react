export interface Props {
  name?: string
  onChange?: Function
  onBlur?: Function
  value?: string
  type?: string
  placeholder?: string
  error?: boolean
  errorMessage?: string
  rightIcon?: 'check' | 'send' | string
  onEnterPress?: Function | undefined
  inverted?: boolean
  color?: string
  background?: string
}
