import create from 'zustand'
import { saveData } from 'services/storage'

export const useFanHeroStore = create((set) => ({
  userData: null,
  setUserData: (userData: any) => {
    saveData('@FanHero:userData', userData)
    return set({ userData })
  }
}))
