import { Profile } from 'generated/graphql';

export interface AuthTypes {
  signed: boolean
  user: object | null
  signOut: () => Promise<void>
  updateUser: () => Promise<void>
  updateAccount: (account: Profile) => Promise<void>
}
