import { useTabsStore, useThemeStore } from 'services/stores'
import { Tab } from 'components'
import { colors } from 'styles'
import { TabContainer } from './styles'
import { useTranslation } from 'react-i18next'

const Tabs = () => {
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  const { activeTab, setActiveTab, tabsList } = useTabsStore()
  return (
    <TabContainer display="flex">
      {tabsList.map((tab: any) => (
        <Tab
          key={tab.id}
          link={tab.url}
          selected={activeTab?.id === tab.id}
          onSelect={() => setActiveTab(tab)}
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
