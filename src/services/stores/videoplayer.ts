import create from 'zustand'

type AutoplayerState = {
  endedVideo: boolean
  remainingTime: boolean
  hasAutoplay: boolean
  nextVideo: string
  isLastVideo: boolean
  setEndedVideo: (value: boolean) => void
  setRemainingTime: (value: boolean) => void
  setAutoplay: (value: boolean) => void
  setNextVideo: (value: string) => void
  setIsLastVideo: (value: boolean) => void
}

export const useVideoPlayerStore = create<AutoplayerState>((set) => ({
  endedVideo: false,
  remainingTime: false,
  hasAutoplay: false,
  nextVideo: '',
  isLastVideo: true,
  setEndedVideo: (endedVideo: boolean) => set({ endedVideo }),
  setRemainingTime: (remainingTime: boolean) => set({ remainingTime }),
  setAutoplay: (hasAutoplay: boolean) => set({ hasAutoplay }),
  setNextVideo: (nextVideo: string) => set({ nextVideo }),
  setIsLastVideo: (isLastVideo: boolean) => set({ isLastVideo }),
}))