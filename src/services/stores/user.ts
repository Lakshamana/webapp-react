import create from 'zustand'
import { saveData } from 'services/storage'

// interface UserState {
//   userData: Object | null,
//   setUserData: (userData: Object) => void
// }

type UserState = {
  userData: Object | null,
  setUserData: (userData: Object) => void
}

export const useFanHeroStore = create<UserState>((set) => ({
  userData: null,
  setUserData: (userData: any) => {
    saveData('@FanHero:userData', userData)
    return set({ userData })
  }
}))
