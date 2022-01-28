import { Account } from 'generated/graphql';

export interface AccountData {
  updateAccount: (account: Object) => void
  isLoading: boolean
  account: Account
}
