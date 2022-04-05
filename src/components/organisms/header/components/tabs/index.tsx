import { useTranslation } from 'react-i18next'
import { useTabsStore, useThemeStore } from 'services/stores'
import { Tab } from 'components'
import { colors } from 'styles'
import { TabContainer } from './styles'
import { PropsTabs } from './types'
import { TabFlags } from 'types/flags'

const Tabs = ({ closeSideMenu }: PropsTabs) => {
  const { colorMode } = useThemeStore()
  const { activeTab, setActiveTab, tabsList } = useTabsStore()
  const { i18n } = useTranslation()

  const handleSelect = (tab) => () => {
    closeSideMenu()
    setActiveTab(tab)
  }

  const getTabLabel = (tab: TabFlags) => {
    const item = tab.LABEL.filter((item) => i18n.language.includes(item.LOCALE))
    return item[0].VALUE
  }

  return (
    <TabContainer display="flex">
      {tabsList.map((tab: TabFlags) => (
        <Tab
          key={tab.TAB}
          link={tab.URL}
          selected={activeTab?.TAB === tab.TAB}
          onSelect={handleSelect(tab)}
          color={colors.secondaryText[colorMode]}
          mx={15}
        >
          {getTabLabel(tab)}
        </Tab>
      ))}
    </TabContainer>
  )
}

export { Tabs }
