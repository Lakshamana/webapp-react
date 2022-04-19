export interface InputProps {
  startValue: Date
  onChange: (date: string) => void
  isInvalid?: boolean
  errorMessage?: string
}
