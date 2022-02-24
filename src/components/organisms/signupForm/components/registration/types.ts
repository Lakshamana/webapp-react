import { SocialType } from 'types/common'

export interface RegistrationProps {
  handleFormSubmit: (formData: any) => void
  handleSocialSignUp: (kind: SocialType) => void
  dispatchError: () => void
  error: string
  isLoading: boolean
}
