import { CHANNEL_INFO } from 'config/constants'
import { getData } from 'services/storage'
import { TabFlags } from 'types/flags'
import create from 'zustand'

export const mapperTabName = {
  HOME: 'HOME',
  FEED: 'FEED',
  LIVES: 'LIVE',
  CATEGORIES: 'COLLECTIONS',
  MYLIST: 'MYLIST',
  ROOMS: 'ROOMS',
}

const getTabURL = (tab: string) => {
  const URL = {
    HOME: '/c/:channel',
    FEED: '/c/:channel/feed',
    LIVE: '/c/:channel/lives',
    COLLECTIONS: '/c/:channel/categories',
    MYLIST: '/c/:channel/mylist',
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
    tabsList = tabsList
      .sort((a, b) => a.ORDER - b.ORDER)
      .filter((item) => item.IS_ACTIVE)
    if (channel) {
      let slug = ''
      for (const tab of tabsList) {
        tab.URL = getTabURL(tab.TAB.toUpperCase())
        slug = tab.URL?.substring(
          tab.URL.lastIndexOf('c/') + 2,
          tab.URL.lastIndexOf('/')
        )
        if (tab.TAB.toUpperCase() === 'HOME') {
          slug = tab.URL?.substring(tab.URL.indexOf('c/') + 2)
        }
        tab.URL = tab.URL?.replace(slug, channel.slug)
      }
    }
    return set({ tabsList })
  },
}))
