import { useState, memo, useReducer, useEffect } from 'react'
import { useLocation, matchPath, useHistory } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { QUERY_MENUS } from 'services/graphql'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Container, Logo, UserInfo } from 'components'
import {
  Tabs,
  MenuIcon,
  ChannelSelector,
  SearchBar,
  SideMenu,
} from './components'

import { useThemeStore } from 'services/stores/theme'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks/useThumbor'
import { useChannelsStore, useCustomizationStore } from 'services/stores'
import { initialState, SEARCH_VALUES } from './settings'
import { defaultProps, SearchResults } from './types'
import { handleContentSearch, reducer, getSelectedTab } from './utils'
import { sizes, breakpoints } from 'styles'
import { HeaderContainer } from './styles'
import { mapperTabName, useTabsStore } from 'services/stores/tabs'

const HeaderComponent = () => {
  const [visibleMobile, setVisibleMobile] = useState('flex')
  const { colorMode, toggleColorMode } = useThemeStore()
  const { pathname } = useLocation()
  const { organizationConfig, activeChannelConfig } = useCustomizationStore()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const { setTabsList, setActiveTab, tabsList } = useTabsStore()
  const { activeChannel, setActiveChannelMenu, activeChannelMenu, channelsList } =
    useChannelsStore()
  const { generateImage } = useThumbor()
  const history = useHistory()

  const generateOrgLogo = () => {
    const theme = colorMode.toUpperCase()
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
    const theme = colorMode.toUpperCase()
    return generateImage(
      ThumborInstanceTypes.IMAGE,
      activeChannelConfig?.IMAGES?.CHANNEL_LOGO[theme] || '',
      {
        size: { height: 80 },
      }
    )
  }

  const [getMenus, { loading: loadingMenu }] = useLazyQuery(QUERY_MENUS, {
    fetchPolicy: 'network-only',
    onCompleted: (result) => setActiveChannelMenu(result?.menus?.rows),
  })

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    selected: getSelectedTab(pathname),
  })

  const [searchValues, setSearchValues] = useState<SearchResults[]>([])

  const handleSearch = (evt: any) => {
    dispatch({ type: 'search', value: evt.target.value })
    setSearchValues(handleContentSearch(SEARCH_VALUES, evt.target.value))
  }

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
        ? getActiveTab?.params['tabUrlName'].toUpperCase()
        : 'HOME'

    tabName = mapperTabName[tabName]
    const UNRELATED_MENU = {
      TAB: '',
      IS_ACTIVE: true,
      ORDER: 0,
      LABEL: [{ LOCALE: '', VALUE: '' }],
      URL: '',
    }
    const defineTab = tabsList.find((item) => item.TAB === tabName)
    defineTab ? setActiveTab(defineTab) : setActiveTab(UNRELATED_MENU)
    // eslint-disable-next-line
  }, [tabsList, activeChannel])

  useEffect(() => {
    if (state.openMenu && !!!activeChannelMenu?.length) {
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
            clickable={true}
            src={
              activeChannelConfig?.SETTINGS.DISPLAY_CHANNEL_LOGO
                ? channelLogo()
                : generateOrgLogo()
            }
            onClick={() => {
              activeChannelConfig?.SETTINGS.DISPLAY_CHANNEL_LOGO
                ? history.push(`/c/${activeChannel?.slug}`)
                : history.push('/')
            }}
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
          <SearchBar
            data={searchValues}
            open={state.openSearch}
            onOpen={handleOpenSearch}
            onClose={handleCloseSearch}
            onSearch={handleSearch}
            search={state.search}
            {...{ colorMode }}
          />
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
