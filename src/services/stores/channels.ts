import create from 'zustand'
import { Channel } from 'generated/graphql'
import { saveData } from 'services/storage'
import { CHANNEL_INFO } from 'config/constants'

type ChannelStorageData = {
  id: string
  name: string
}

type ChannelsState = {
  activeChannel: Channel | null
  channelsList: Channel[] | []
  setActiveChannel: (channel: Channel) => void
  setChannelsList: (channelsList: Channel[]) => void
}

export const useChannelsStore = create<ChannelsState>((set) => ({
  activeChannel: null,
  setActiveChannel: (activeChannel: Channel) => {
    let storageData: ChannelStorageData = {
      id: activeChannel.id,
      name: activeChannel.name
    }
    saveData(CHANNEL_INFO, storageData)
    return set({ activeChannel })
  },
  channelsList: [],
  setChannelsList: (channelsList: Channel[]) => {
    return set({ channelsList })
  },
}))
