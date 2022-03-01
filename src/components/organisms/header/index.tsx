import { useState, memo, useReducer, useEffect } from 'react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useLocation } from 'react-router-dom'
import { Divider, Center } from '@chakra-ui/react'
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
import { useChannelsStore, useOrganizationStore } from 'services/stores'
import { MENU_TABS, initialState, SEARCH_VALUES } from './settings'
import { defaultProps, SearchResults } from './types'
import { handleContentSearch, reducer, getSelectedTab } from './utils'
import { sizes, breakpoints, colors } from 'styles'
import { HeaderContainer } from './styles'
import { useTabsStore } from 'services/stores/tabs'

const HeaderComponent = () => {
  const [visibleMobile, setVisibleMobile] = useState('flex')
  const { colorMode, toggleColorMode } = useThemeStore()
  const { pathname } = useLocation()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const { setTabsList, setActiveTab } = useTabsStore()
  const { activeChannel } = useChannelsStore()

  const { organization } = useOrganizationStore()
  const { generateImage } = useThumbor()
  const org_logo = generateImage(
    ThumborInstanceTypes.IMAGE,
    organization?.customization.logo,
    {
      size: { height: 80 },
    }
  )

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

  const handleOpenMenu = () => {
    dispatch({ type: 'openMenu', value: !state.openMenu })
  }

  const handleOpenSearch = () => {
    if (isMobile()) {
      dispatch({ type: 'openMenu', value: false })
      setVisibleMobile('none')
    }
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

  useEffect(() => {
    setTabsList(MENU_TABS)
    const home_tab = MENU_TABS.find((tab) => tab.id === 'home')
    if (home_tab) setActiveTab(home_tab)
    // eslint-disable-next-line
  }, [activeChannel])

  return (
    <>
      <SideMenu data={[]} open={state.openMenu} {...{ colorMode }}>
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
          <MenuIcon open={state.openMenu} setOpen={handleOpenMenu} />
          <Logo
            mx={2}
            ignoreFallback
            src={org_logo}
            width={isDesktop ? '180px' : '120px'}
          />
          <Center height="30px">
            <Divider orientation="vertical" color={colors.grey['700']} />
          </Center>
          {!state.openSearch ? <ChannelSelector /> : null}
        </Container>
        {!state.openSearch ? (
          <Container
            flex={1}
            ml={2}
            justifyContent="center"
            alignItems="center"
            display={['none', 'none', 'flex']}
          >
            <Tabs />
          </Container>
        ) : null}
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
          <UserInfo display={'menu'} {...{ colorMode, toggleColorMode }} />
        </Container>
      </HeaderContainer>
    </>
  )
}

HeaderComponent.defaultProps = defaultProps

const Header = memo(HeaderComponent)

export { Header }
