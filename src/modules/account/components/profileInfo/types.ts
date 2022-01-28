import { Profile } from 'generated/graphql';

export interface ProfileData {
  updateProfile: (profile: Object) => void
  isLoading: boolean
  user: Profile
  locale: string
}
