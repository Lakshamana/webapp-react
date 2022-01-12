import { Profile } from 'generated/graphql';

type KindType = 'public' | 'exclusive'

export interface AuthTypes {
  signed: boolean
  kind: KindType
  user: object | null
  signOut: () => Promise<void>
  updateUser: () => Promise<void>
  updateAccount: (account: Profile) => Promise<void>
}
