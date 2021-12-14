export interface RegistrationProps {
  handleFormSubmit: (formData: any) => void
  dispatchError: () => void
  error: string
  isLoading: boolean
}
