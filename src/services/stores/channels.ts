import create from 'zustand'
import { Channel } from 'generated/graphql'
import { saveData } from 'services/storage'
import { CHANNEL_INFO } from 'config/constants'

type ChannelStorageData = {
  id: string
  name: string
}

type ChannelsState = {
  activeChannel: Maybe<Channel>
  activeChannelMenu: []
  channelsList: Maybe<Channel[]>
  setActiveChannel: (channel: Channel) => void
  setActiveChannelMenu: (menu: []) => void
  setChannelsList: (channelsList: Channel[]) => void
}

export const useChannelsStore = create<ChannelsState>((set) => ({
  activeChannel: null,
  setActiveChannel: (activeChannel: Channel) => {
    const storageData: ChannelStorageData = {
      id: activeChannel.id,
      name: activeChannel.name,
    }
    saveData(CHANNEL_INFO, storageData)
    return set({ activeChannel })
  },
  channelsList: [],
  setChannelsList: (channelsList: Channel[]) => set({ channelsList }),
  activeChannelMenu: [],
  setActiveChannelMenu: (activeChannelMenu: []) => set({ activeChannelMenu }),
}))
