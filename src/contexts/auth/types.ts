import { Account, Profile } from 'generated/graphql'

type KindType = 'public' | 'exclusive'

export interface AuthTypes {
  signed: boolean
  kind: KindType
  user?: object
  loadingAccount: boolean
  signOut: () => Promise<void>
  updateUser: (user: Profile) => Promise<void>
  updateAccount: (account: Account) => Promise<void>
  getAccount: () => Promise<void>
  updateActiveChannel: (channel?: string) => Promise<void>
}
