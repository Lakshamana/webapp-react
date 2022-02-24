import { SocialType } from 'types/common'

export interface Props {
  errors?: any
  handleFormSubmit: (formData: any) => void
  handleSocialSubmit: (kind: SocialType) => void
  dispatchError: () => void
  isLoading: boolean
  error: string
}
