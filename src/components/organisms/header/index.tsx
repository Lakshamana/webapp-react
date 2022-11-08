import { useLazyQuery } from '@apollo/client'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Box } from '@chakra-ui/react'
import { Container, LanguageSelector, Logo, UserInfo } from 'components'
import { memo, useEffect, useReducer, useState } from 'react'
import { matchPath, useHistory, useLocation } from 'react-router-dom'
import { QUERY_MENUS } from 'services/graphql'
import {
  ChannelSelector,
  MenuIcon,
  SearchBar,
  SideMenu,
  Tabs
} from './components'

import { ThumborInstanceTypes, useThumbor } from 'hooks/useThumbor'
import {
  useAuthStore,
  useChannelsStore,
  useCustomizationStore
} from 'services/stores'
import { mapperTabName, useTabsStore } from 'services/stores/tabs'
import { useThemeStore } from 'services/stores/theme'
import { breakpoints, sizes } from 'styles'
import { initialState } from './settings'
import { HeaderContainer } from './styles'
import { defaultProps } from './types'
import { getSelectedTab, reducer } from './utils'

const HeaderComponent = () => {
  const [visibleMobile, setVisibleMobile] = useState('flex')
  const { colorMode, toggleColorMode } = useThemeStore()
  const { isAnonymousAccess } = useAuthStore()
  const { pathname } = useLocation()
  const { organizationConfig, activeChannelConfig } = useCustomizationStore()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const { setTabsList, setActiveTab, tabsList } = useTabsStore()
  const {
    activeChannel,
    setActiveChannelMenu,
    activeChannelMenu,
    isSingleChannel,
  } = useChannelsStore()
  const { generateImage } = useThumbor()
  const history = useHistory()

  const generateOrgLogo = () => {
    const theme = colorMode?.toUpperCase()
    if (!organizationConfig?.IMAGES?.ORGANIZATION_LOGO) return ''
    return generateImage(
      ThumborInstanceTypes.IMAGE,
      organizationConfig?.IMAGES?.ORGANIZATION_LOGO[theme],
      {
        size: { height: 80 },
      }
    )
  }

  const channelLogo = () => {
    if (!activeChannel?.customization?.logo) return ''
    
    return generateImage(
      ThumborInstanceTypes.IMAGE,
      `${activeChannel?.customization?.logo[colorMode]?.imgPath}`,
      {
        size: { height: 80 },
      }
    )
  }

  const [getMenus, { loading: loadingMenu }] = useLazyQuery(QUERY_MENUS, {
    variables: {
      filter: {
        isChild: false,
      },
    },
    fetchPolicy: 'network-only',
    onCompleted: (result) => setActiveChannelMenu(result?.menus?.rows),
  })

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    selected: getSelectedTab(pathname),
  })

  const handleCloseSearch = () => {
    setVisibleMobile('flex')
    dispatch({ type: 'search', value: '' })
    dispatch({ type: 'openSearch', value: false })
  }

  const handleToggleMenu = () =>
    dispatch({ type: 'openMenu', value: !state.openMenu })
  const handleCloseMenu = () => dispatch({ type: 'openMenu', value: false })

  const handleOpenSearch = () => {
    if (isMobile()) {
      setVisibleMobile('none')
    }
    handleCloseMenu()
    dispatch({ type: 'openSearch', value: true })
  }

  const isMobile = () => {
    const { width } = getWindowDimensions()
    return width < Number(breakpoints.lg.replace('px', ''))
  }

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }

  const handleLogoClick = () => {
    if (
      activeChannelConfig?.SETTINGS.DISPLAY_CHANNEL_LOGO ||
      (!activeChannelConfig?.SETTINGS.DISPLAY_CHANNEL_LOGO && isSingleChannel)
    ) {
      history.push(`/c/${activeChannel?.slug}`)
      return
    }

    if (!activeChannelConfig?.SETTINGS.DISPLAY_CHANNEL_LOGO) history.push('/')
  }

  // eslint-disable-next-line
  useEffect(() => setActiveChannelMenu([]), [activeChannel])

  useEffect(() => {
    if (organizationConfig && organizationConfig.HEADER) {
      setTabsList(organizationConfig?.HEADER?.TABS)
    }
    handleCloseMenu()
    // eslint-disable-next-line
  }, [pathname])

  useEffect(() => {
    const getActiveTab = matchPath(pathname, {
      path: '/c/:channel/:tabUrlName',
      strict: true,
    })
    let tabName =
      getActiveTab && getActiveTab?.params
        ? getActiveTab?.params['tabUrlName']
        : 'HOME'

    tabName = mapperTabName[tabName.toUpperCase()]
    const UNRELATED_MENU = {
      TAB: '',
      IS_ACTIVE: true,
      ORDER: 0,
      LABEL: [{ LOCALE: '', VALUE: '' }],
      URL: '',
    }
    const defineTab = tabsList.find(
      (item) => item.TAB.toUpperCase() === tabName
    )

    defineTab ? setActiveTab(defineTab) : setActiveTab(UNRELATED_MENU)
    // eslint-disable-next-line
  }, [tabsList, activeChannel])

  useEffect(() => {
    if (state.openMenu && !!!activeChannelMenu?.length && !isAnonymousAccess) {
      getMenus()
    }
    //eslint-disable-next-line
  }, [state.openMenu])

  return (
    <>
      <SideMenu
        data={activeChannelMenu}
        open={state.openMenu}
        loading={loadingMenu}
        closeMenuAction={handleCloseMenu}
      >
        <UserInfo display={'sidebar'} {...{ colorMode, toggleColorMode }} />
      </SideMenu>
      <HeaderContainer
        height={[
          sizes.headerMobileHeight,
          sizes.headerMobileHeight,
          sizes.headerDesktopHeight,
          sizes.headerDesktopHeight,
        ]}
        width={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Container alignItems="center" display={visibleMobile}>
          <MenuIcon open={state.openMenu} setOpen={handleToggleMenu} />
          <Logo
            mx={2}
            ignoreFallback
            clickable
            src={
              activeChannelConfig?.SETTINGS.DISPLAY_CHANNEL_LOGO
                ? channelLogo()
                : generateOrgLogo()
            }
            onClick={handleLogoClick}
            maxWidth={isDesktop ? '180px' : '120px'}
          />
          {!state.openSearch && (
            <ChannelSelector closeSideMenu={handleCloseMenu} />
          )}
        </Container>
        {!state.openSearch && (
          <Container
            flex={1}
            ml={2}
            justifyContent="center"
            alignItems="center"
            display={['none', 'none', 'flex']}
          >
            <Tabs closeSideMenu={handleCloseMenu} />
          </Container>
        )}
        <Container
          alignItems="center"
          flex={state.openSearch ? 1 : 'none'}
          zIndex={1000}
        >
          {!isAnonymousAccess && (
            <SearchBar
              open={state.openSearch}
              onOpen={handleOpenSearch}
              onClose={handleCloseSearch}
              search={state.search}
              {...{ colorMode }}
            />
          )}
          {isAnonymousAccess && (
            <Box marginLeft={'auto'} mr={3}>
              <LanguageSelector />
            </Box>
          )}
          <UserInfo
            display={'menu'}
            closeSideMenu={handleCloseMenu}
            {...{ colorMode, toggleColorMode }}
          />
        </Container>
      </HeaderContainer>
    </>
  )
}

HeaderComponent.defaultProps = defaultProps

const Header = memo(HeaderComponent)

export { Header }
