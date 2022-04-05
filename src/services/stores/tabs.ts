import create from 'zustand'
import { CHANNEL_INFO } from 'config/constants'
import { getData } from 'services/storage'
import { TabFlags } from 'types/flags'
import { convertCamelCaseToDash } from 'utils'

const getTabURL = (tab: string) => {
  const URL = {
    HOME: '/c/:channel',
    FEED: '/c/:channel/feed',
    LIVE: '/c/:channel/live',
    COLLECTIONS: '/c/:channel/categories',
    MY_LIST: '/c/:channel/mylist',
    ROOMS: '',
  }

  return URL[tab]
}

type TabsState = {
  activeTab: TabFlags | null
  tabsList: TabFlags[] | []
  setActiveTab: (tab: TabFlags) => void
  setTabsList: (tabsList: TabFlags[]) => void
}

export const useTabsStore = create<TabsState>((set) => ({
  activeTab: null,
  setActiveTab: (activeTab: TabFlags) => set({ activeTab }),
  tabsList: [],
  setTabsList: (tabsList: TabFlags[]) => {
    const channel = getData(CHANNEL_INFO)
    const activeTabs = tabsList
      .sort((a, b) => a.ORDER - b.ORDER)
      .filter((item) => item.ACTIVE)
    if (channel) {
      const channelName = convertCamelCaseToDash(channel.name)
      let slug = ''
      for (const tab of activeTabs) {
        tab.URL = getTabURL(tab.TAB)
        slug = tab.URL?.substring(
          tab.URL.lastIndexOf('c/') + 2,
          tab.URL.lastIndexOf('/')
        )
        if (tab.TAB === 'HOME') {
          slug = tab.URL?.substring(tab.URL.indexOf('c/') + 2)
        }
        tab.URL = tab.URL?.replace(slug, channelName)
      }
    }
    return set({ tabsList })
  },
}))
