import create from 'zustand'
import { Channel, Kinds } from 'generated/graphql'
import { getData, removeData, saveData } from 'services/storage'
import { CHANNEL_INFO, APP_SINGLE_CHANNEL } from 'config/constants'
import { ChannelStorageData } from 'types/channel'

type ChannelsState = {
  activeChannel: Maybe<ChannelStorageData>
  activeChannelKind: Maybe<Kinds>
  activeChannelMenu: []
  isSingleChannel: Maybe<boolean>
  channelsList: Maybe<Channel[]>
  setActiveChannel: (channel: ChannelStorageData) => void
  setActiveChannelMenu: (menu: []) => void
  setChannelsList: (channelsList: Channel[]) => void
  setIsSingleChannel: (isSingleChannel: boolean) => void
  setActiveChannelKind: (kind: Kinds) => void
  clearActiveChannel: () => void
}

export const useChannelsStore = create<ChannelsState>((set) => ({
  activeChannel: null,
  activeChannelKind: null,
  isSingleChannel: null,
  setActiveChannel: (activeChannel: ChannelStorageData) => {
    const storedChannelStatus = getData(APP_SINGLE_CHANNEL)
    saveData(CHANNEL_INFO, activeChannel)
    return set((state) => ({
      activeChannel,
      isSingleChannel: state.isSingleChannel || storedChannelStatus || null,
      activeChannelKind: (activeChannel.kind as Kinds) || null,
    }))
  },
  channelsList: [],
  setChannelsList: (channelsList: Channel[]) => {
    const isSingleChannel = channelsList?.length === 1
    saveData(APP_SINGLE_CHANNEL, isSingleChannel)
    set(() => ({
      channelsList,
      isSingleChannel,
    }))
  },
  activeChannelMenu: [],
  setActiveChannelMenu: (activeChannelMenu: []) => set({ activeChannelMenu }),
  setIsSingleChannel: (isSingleChannel: boolean) => set({ isSingleChannel }),
  setActiveChannelKind: (activeChannelKind: Kinds) =>
    set({ activeChannelKind }),
  clearActiveChannel: () => {
    removeData(CHANNEL_INFO)
    set({ activeChannel: null })
  },
}))
