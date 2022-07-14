import { Tab } from 'components'
import { useTranslation } from 'react-i18next'
import { useTabsStore, useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { TabFlags } from 'types/flags'
import { TabContainer } from './styles'
import { PropsTabs } from './types'

const Tabs = ({ closeSideMenu }: PropsTabs) => {
  const { colorMode } = useThemeStore()
  const { activeTab, setActiveTab, tabsList } = useTabsStore()
  const { i18n } = useTranslation()

  const handleSelect = (tab) => () => {
    closeSideMenu()
    setActiveTab(tab)
  }

  const getTabLabel = (tab: TabFlags) => {
    const language = i18n.language || 'en-US'
    const item = tab.LABEL.find((item) => item.LOCALE === language)
    return item?.VALUE
  }

  const renderTabs = () =>
    tabsList.map((tab: TabFlags) => (
      <Tab
        key={tab.TAB}
        link={tab.URL}
        selected={activeTab?.TAB === tab.TAB}
        onSelect={handleSelect(tab)}
        color={
          activeTab?.TAB === tab.TAB
            ? colors.generalText[colorMode]
            : colors.secondaryText[colorMode]
        }
        mx={15}
      >
        {getTabLabel(tab)}
      </Tab>
    ))

  return (
    <TabContainer display="flex">
      {!!tabsList.length && renderTabs()}
    </TabContainer>
  )
}

export { Tabs }
