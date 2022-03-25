import { Link } from 'react-router-dom'
import { useTabsStore } from 'services/stores'
import { Box } from '@chakra-ui/layout'
import { Spinner, Flex } from '@chakra-ui/react'
import { useHistory, useLocation } from 'react-router-dom'
import { Container, Text } from 'components'
import { PropsSideMenu } from '../../types'
import { SideContainer, ScrollContainer, ChannelsContainer, Circle } from './styles'
import { colors } from 'styles'
import { getChannelNameInPath } from 'utils'


const SideMenu = ({ open, colorMode, children, data }: PropsSideMenu) => {
  const history = useHistory()
  const { pathname } = useLocation()
  const { activeTab, setActiveTab, tabsList } = useTabsStore()

  const redirectTo = (route) => () => {
    if (!route) return
    if (route.indexOf('http') === 0) {
      window?.open(route, '_blank')?.focus()
      return
    }
    const channelName = getChannelNameInPath(pathname)?.toLowerCase()
    history.push(`/c/${channelName}${route}`)
  }

  return (
    <SideContainer display="block" {...{ open }}>
      {children}
      <ScrollContainer flexDirection="column" my={3} px={'20px'}>
        <Box>
          {tabsList?.map((item: any) => {
            const isSelected = activeTab?.id === item.id
            return (
              <Link
                to={item.url}
                key={`Path-${item.id}`}
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
                    {item.label}
                  </Text>
                </Container>
              </Link>
            )
          })}
        </Box>
      </ScrollContainer>
      <ChannelsContainer flexDirection="column" my={3} px={'20px'}>
        <Box>
          {data.length === 0 && (
            <Flex alignItems="center" justifyContent="center" py={20}>
              <Spinner size="lg" color={colors.brand.primary[colorMode]} />
            </Flex>
          )}
          {data?.map((menu: any) => (
            <Container
              key={`menu-${menu.id}`}
              width={1}
              py={3}
              alignItems={'center'}
              justifyContent={'left'}
              onClick={redirectTo(menu?.route)}
            >
              <Text
                style={{
                  textTransform: 'uppercase',
                  cursor: 'pointer'
                }}
                color={colors.generalText[colorMode]}
              >
                {menu.name}
              </Text>
            </Container>
          ))}
        </Box>
      </ChannelsContainer>
    </SideContainer>
  )
}

export { SideMenu }
