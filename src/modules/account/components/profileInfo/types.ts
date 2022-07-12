import { Profile } from 'generated/graphql';

export interface ProfileData {
  updateProfile: (profile: Object) => void
  updateAvatar: (image: string | null) => void,
  isLoading: boolean
  user: Profile
  locale: string
}
