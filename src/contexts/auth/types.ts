import { Account, Profile } from 'generated/graphql'
import { Kinds } from 'generated/graphql'

export interface AuthTypes {
  signed: boolean
  kind: Kinds
  user?: object
  loadingAccount: boolean
  signOut: () => Promise<void>
  updateUser: (user: Profile) => Promise<void>
  updateAccount: (account: Account) => Promise<void>
  getAccount: () => Promise<void>
  updateActiveChannel: (channel?: string) => Promise<void>
}
