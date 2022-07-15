import { ANONYMOUS_AUTH } from 'config/constants'
import { Account, Profile } from 'generated/graphql'
import { saveData } from 'services/storage'
import create from 'zustand'

interface AuthState {
  user: Profile | null
  account: Account | null
  isAnonymousAccess: boolean
  setUser: (user: Profile) => void
  setAccount: (account: Account) => void
  setAnonymous: (isAnonymous: boolean) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  account: null,
  isAnonymousAccess: false,
  setUser: (user: Profile) => {
    return set({ user })
  },
  setAccount: (account: Account) => {
    return set({ account })
  },
  setAnonymous: (isAnonymousAccess: boolean) => {
    saveData(ANONYMOUS_AUTH, isAnonymousAccess)
    return set({ isAnonymousAccess })
  },
}))
