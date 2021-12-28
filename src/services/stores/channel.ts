import create from 'zustand'
import { Channel } from 'generated/graphql'

type ChannelState = {
  channel: Channel | null
  setChannel: (channel: Channel) => void
}

export const useChannelStore = create<ChannelState>((set) => ({
  channel: null,
  setChannel: (channel: Channel) => {
    return set({ channel })
  },
}))
