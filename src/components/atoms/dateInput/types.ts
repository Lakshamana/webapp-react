export interface InputProps {
  startValue: Date
  onChange: (date: string) => void
  isInvalid?: boolean | any
  errorMessage: string | any
}
