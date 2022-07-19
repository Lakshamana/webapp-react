import { useDisclosure } from '@chakra-ui/react';
import { Profile } from 'generated/graphql';

export interface ProfileData {
  updateProfile: (profile: Object) => void
  updateAvatar: (image: string | null) => void,
  useDisclosureProps: ReturnType<typeof useDisclosure>,
  isLoading: boolean
  user: Profile
  locale: string
}
