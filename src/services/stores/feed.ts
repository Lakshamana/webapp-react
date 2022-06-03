import create from 'zustand'

type LastPostionState = {
  lastPositionCard: number
  setLastPositionCard: (value: number) => void
}

export const useFeedStore = create<LastPostionState>((set) => ({
  lastPositionCard: 0,
  setLastPositionCard: (lastPositionCard: number) => set({ lastPositionCard })
}))
