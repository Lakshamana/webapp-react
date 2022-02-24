import { useTabsStore, useThemeStore } from 'services/stores'
import { Tab } from 'components'
import { colors } from 'styles'
import { TabContainer } from './styles'

const Tabs = () => {
  const { colorMode } = useThemeStore()
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
          {tab.label}
        </Tab>
      ))}
    </TabContainer>
  )
}

export { Tabs }
