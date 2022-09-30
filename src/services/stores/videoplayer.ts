import create from 'zustand'

export enum PlayerEventName {
  EVENT_ENDED = 'eventEnded',
  EVENT_PLAY = 'eventPlay',
  EVENT_ERROR = 'eventError',
  EVENT_SEEKED = 'eventSeeked',
  EVENT_PAUSE = 'eventPause',
  EVENT_READY = 'eventReady',
  EVENT_BUFFER = 'eventBuffer',
}

type AutoPlayerState = {
  remainingTime: boolean
  hasAutoplay: boolean
  nextVideo: string
  isLastVideo: boolean,
  eventPlay: boolean,
  eventPause: boolean,
  eventEnded: boolean,
  eventError: boolean,
  eventSeeked: boolean,
  eventReady: boolean,
  eventBuffer: number,
  setRemainingTime: (value: boolean) => void
  setAutoplay: (value: boolean) => void
  setNextVideo: (value: string) => void
  setIsLastVideo: (value: boolean) => void
  setEventUpdate: (key: PlayerEventName, value?: boolean | number) => void
}

const defaultEventValues = {
  eventPlay: false,
  eventPause: false,
  eventEnded: false,
  eventError: false,
  eventSeeked: false,
  eventReady: false,
  eventBuffer: 0,
}

export const useVideoPlayerStore = create<AutoPlayerState>((set, get) => ({
  remainingTime: false,
  hasAutoplay: false,
  nextVideo: '',
  isLastVideo: true,
  ...defaultEventValues,
  setRemainingTime: (remainingTime: boolean) => set({ remainingTime }),
  setAutoplay: (hasAutoplay: boolean) => set({ hasAutoplay }),
  setNextVideo: (nextVideo: string) => set({ nextVideo }),
  setIsLastVideo: (isLastVideo: boolean) => set({ isLastVideo }),
  setEventUpdate: (key: PlayerEventName, value?: Boolean | Number) => {
    set((state: AutoPlayerState) => ({
      ...state,
      ...defaultEventValues,
      [key]: value ?? true
    }))
  }
}))