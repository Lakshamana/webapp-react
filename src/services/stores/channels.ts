import { setChannel } from 'config/analytics'
import { APP_SINGLE_CHANNEL, CHANNEL_INFO } from 'config/constants'
import { Channel, Kinds } from 'generated/graphql'
import { getData, removeData, saveData } from 'services/storage'
import create from 'zustand'

type ChannelsState = {
  activeChannel: Maybe<Channel>
  activeChannelKind: Maybe<Kinds>
  activeChannelMenu: []
  isSingleChannel: Maybe<boolean>
  channelsList: Maybe<Channel[]>
  setActiveChannel: (channel: Channel) => void
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
  setActiveChannel: async (activeChannel: Channel) => {
    setChannel(activeChannel.id, activeChannel.name)
    const storedChannelStatus = getData(APP_SINGLE_CHANNEL)
    await saveData(CHANNEL_INFO, {
      id: activeChannel.id,
      name: activeChannel.name,
      slug: activeChannel.slug,
      kind: activeChannel.kind,
      access: activeChannel.access,
    })
    await set((state) => ({
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
