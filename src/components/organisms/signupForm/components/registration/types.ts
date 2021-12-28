import { Social } from 'services/firebase'

export interface RegistrationProps {
  handleFormSubmit: (formData: any) => void
  handleSocialSignUp: (kind: Social) => void
  dispatchError: () => void
  error: string
  isLoading: boolean
}
