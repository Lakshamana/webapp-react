import create from 'zustand'
import { Account, Profile } from 'generated/graphql'

interface AuthState {
  user: Profile | null
  account: Account | null
  setUser: (user: Profile) => void
  setAccount: (account: Account) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  account: null,
  setUser: (user: Profile) => {
    return set({ user })
  },
  setAccount: (account: Account) => {
    return set({ account })
  },
}))
