import create from 'zustand'

type CommonState = {
  pageTitle: string | null
  setPageTitle: (title: string) => void
}

export const useCommonStore = create<CommonState>((set) => ({
  pageTitle: '',
  setPageTitle: (pageTitle: string) => set({ pageTitle })
}))
