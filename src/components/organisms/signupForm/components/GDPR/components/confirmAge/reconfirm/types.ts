export interface ConfirmAgeProps {
  handleFormSubmit: () => void
  onCancel: () => void
  gdprAge: string
}

export type ConfirmAgeSteps = 'Confirm' | 'Reconfirm'
