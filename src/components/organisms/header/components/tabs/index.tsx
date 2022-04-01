import { useTabsStore, useThemeStore } from 'services/stores'
import { Tab } from 'components'
import { colors } from 'styles'
import { TabContainer } from './styles'
import { PropsTabs } from './types'
import { useTranslation } from 'react-i18next'

const Tabs = ({ closeSideMenu }: PropsTabs) => {
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  const { activeTab, setActiveTab, tabsList } = useTabsStore()

  const handleSelect = (tab) => () => {
    closeSideMenu()
    setActiveTab(tab)
  }

  return (
    <TabContainer display="flex">
      {tabsList.map((tab: any) => (
        <Tab
          key={tab.id}
          link={tab.url}
          selected={activeTab?.id === tab.id}
          onSelect={handleSelect(tab)}
          color={colors.secondaryText[colorMode]}
          mx={15}
        >
          { t(tab.label) }
        </Tab>
      ))}
    </TabContainer>
  )
}

export { Tabs }
