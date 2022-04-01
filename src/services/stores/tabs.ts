import { CHANNEL_INFO } from 'config/constants'
import { getData } from 'services/storage'
import { convertCamelCaseToDash } from 'utils'
import create from 'zustand'

type TabsData = {
  id: string
  label: string
  url: string
}

type TabsState = {
  activeTab: TabsData | null
  tabsList: TabsData[] | []
  setActiveTab: (tab: TabsData) => void
  setTabsList: (tabsList: TabsData[]) => void
}

export const useTabsStore = create<TabsState>((set) => ({
  activeTab: null,
  setActiveTab: (activeTab: TabsData) => set({ activeTab }),
  tabsList: [],
  setTabsList: (tabsList: TabsData[]) => {
    const channel = getData(CHANNEL_INFO)
    if (channel) {
      const channelName = convertCamelCaseToDash(channel.name)
      let slug
      for (const tab of tabsList) {
        slug = tab.url.substring(
          tab.url.lastIndexOf('c/') + 2,
          tab.url.lastIndexOf('/')
        )
        if (tab.id === 'home') {
          slug = tab.url.substring(tab.url.indexOf('c/') + 2)
        }
        tab.url = tab.url.replace(slug, channelName)
      }
    }
    return set({ tabsList })
  },
}))
