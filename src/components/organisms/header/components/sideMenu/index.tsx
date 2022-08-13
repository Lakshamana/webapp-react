import { Box } from '@chakra-ui/layout'
import { Container, Text } from 'components'
import { Skeleton } from 'components/atoms'
import { useTranslation } from 'react-i18next'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useTabsStore, useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { TabFlags } from 'types/flags'
import { getChannelNameInPath } from 'utils/helperFunctions'
import { PropsSideMenu } from '../../types'
import { DefaultItem, SubItem } from './components'
import {
  ChannelsContainer,
  Circle, ScrollContainer, SideContainer
} from './styles'
import { IMenuItem } from './types'

const SideMenu = ({
  loading,
  open,
  closeMenuAction,
  children,
  data,
}: PropsSideMenu) => {
  const history = useHistory()
  const { pathname } = useLocation()
  const { activeTab, setActiveTab, tabsList } = useTabsStore()
  const { colorMode } = useThemeStore()
  const { i18n } = useTranslation()

  const getTabLabel = (tab: TabFlags) => {
    const item = tab.LABEL.find((item) =>
      i18n.language.includes(item.LOCALE || 'en-US')
    )
    return item?.VALUE || ''
  }

  const redirectTo = (route: string) => () => {
    if (!route) return
    closeMenuAction()
    if (route.indexOf('http') === 0) {
      window?.open(route, '_blank')?.focus()
      return
    }
    const channelName = getChannelNameInPath(pathname)?.toLowerCase()
    history.push(`/c/${channelName}${route}`)
  }

  return (
    <SideContainer display="block" {...{ open }}>
      {open && (
        <>
          {children}
          <ScrollContainer flexDirection="column" my={3} px={'20px'}>
            <Box>
              {tabsList?.map((item: TabFlags) => {
                const isSelected = activeTab?.TAB === item.TAB
                return (
                  <Link
                    to={item.URL}
                    key={`Path-${item.TAB}`}
                    onClick={() => setActiveTab(item)}
                  >
                    <Container
                      width={1}
                      py={3}
                      alignItems={'center'}
                      justifyContent={'left'}
                    >
                      {isSelected && <Circle />}
                      <Text
                        style={{
                          textTransform: 'uppercase',
                          fontWeight: isSelected ? 'bold' : 'normal',
                        }}
                        color={
                          isSelected
                            ? colors.generalText[colorMode]
                            : colors.secondaryText[colorMode]
                        }
                      >
                        {getTabLabel(item)}
                      </Text>
                    </Container>
                  </Link>
                )
              })}
            </Box>
          </ScrollContainer>
          <ChannelsContainer flexDirection="column" my={3} px={'20px'}>
            <Box>
              {loading &&
                [0, 1, 2].map((each) => (
                  <Skeleton key={each} height="30px" width="100%" my={4} />
                ))}
              {data?.map((menuItem: IMenuItem) =>
                !!menuItem.children.length ? (
                  <SubItem
                    key={`menu-${menuItem.id}`}
                    redirectTo={redirectTo}
                    {...menuItem}
                  />
                ) : (
                  <DefaultItem
                    key={`menu-${menuItem.id}`}
                    action={redirectTo(menuItem.route)}
                    {...menuItem}
                  />
                )
              )}
            </Box>
          </ChannelsContainer>
        </>
      )}
    </SideContainer>
  )
}

export { SideMenu }
