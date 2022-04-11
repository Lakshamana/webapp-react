import create from 'zustand'
import { Channel } from 'generated/graphql'
import { saveData } from 'services/storage'
import { CHANNEL_INFO } from 'config/constants'
import { ChannelStorageData } from 'types/channel'

type ChannelsState = {
  activeChannel: Maybe<ChannelStorageData>
  activeChannelMenu: []
  channelsList: Maybe<Channel[]>
  setActiveChannel: (channel: ChannelStorageData) => void
  setActiveChannelMenu: (menu: []) => void
  setChannelsList: (channelsList: Channel[]) => void
}

export const useChannelsStore = create<ChannelsState>((set) => ({
  activeChannel: null,
  setActiveChannel: (activeChannel: ChannelStorageData) => {
    saveData(CHANNEL_INFO, activeChannel)
    return set({ activeChannel })
  },
  channelsList: [],
  setChannelsList: (channelsList: Channel[]) => set({ channelsList }),
  activeChannelMenu: [],
  setActiveChannelMenu: (activeChannelMenu: []) => set({ activeChannelMenu }),
}))
