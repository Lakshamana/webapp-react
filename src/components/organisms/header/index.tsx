import { useState, memo, useReducer } from 'react'
import { useLocation } from 'react-router-dom'
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
import { useOrganizationStore } from 'services/stores'
import {
  CHANNELS,
  DEFAULT_USER,
  SEARCH_VALUES,
  MENUTABS,
  initialState,
} from './settings'
import { Channel, defaultProps, SearchResults } from './types'
import { handleContentSearch, reducer, getSelectedTab } from './utils'
import { sizes, breakpoints } from 'styles'
import { HeaderContainer, LogoContainer, ChannelContainer } from './styles'

const HeaderComponent = () => {
  const [visibleMobile, setVisibleMobile] = useState('flex')
  const { colorMode, toggleColorMode } = useThemeStore()
  const { pathname } = useLocation()

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

  const [channels, setChannels] = useState<Array<Channel>>(CHANNELS)
  const [searchValues, setSearchValues] =
    useState<Array<SearchResults>>(SEARCH_VALUES)

  const handleChannelSearch = (value: any) =>
    setChannels(CHANNELS.filter((channel) => channel.name.includes(value)))

  const handleChannelSelect = (value: any) =>
    dispatch({ type: 'channel', value })

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
      dispatch({ type: 'openMenu', value: false });
      setVisibleMobile('none');
    }
    dispatch({ type: 'openSearch', value: true })
  }

  const isMobile = () => {
    const { width } = getWindowDimensions();
    return width < Number(breakpoints.lg.replace('px', ''))
  }

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  return (
    <>
      <SideMenu
        open={state.openMenu}
        data={MENUTABS}
        selected={state.selected}
        {...{ colorMode }}
      >
        <UserInfo
          display={'sidebar'}
          user={DEFAULT_USER}
          {...{ colorMode, toggleColorMode }}
        />
        <ChannelContainer>
          <ChannelSelector
            display={'sidebar'}
            onSelect={handleChannelSelect}
            onSearch={handleChannelSearch}
            selected={state.channel}
            {...{ channels, colorMode }}
          />
        </ChannelContainer>
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
          <LogoContainer>
            <Logo ignoreFallback src={org_logo} width={180} />
          </LogoContainer>
          {!state.openSearch ? (
            <ChannelSelector
              display={'menu'}
              onSelect={handleChannelSelect}
              onSearch={handleChannelSearch}
              selected={state.channel}
              {...{ channels, colorMode }}
            />
          ) : (
            <></>
          )}
        </Container>
        {!state.openSearch ? (
          <Container
            flex={1}
            ml={2}
            justifyContent="center"
            alignItems="center"
            display={['none', 'none', 'flex']}
          >
            <Tabs
              data={MENUTABS}
              selected={state.selected}
              setSelected={(value: any) =>
                dispatch({ type: 'selected', value })
              }
              {...{ colorMode }}
            />
          </Container>
        ) : (
          <></>
        )}
        <Container alignItems="center" flex={state.openSearch ? 1 : 'none'} zIndex={1000}>
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
            user={DEFAULT_USER}
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
