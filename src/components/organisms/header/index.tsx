import { useState, memo, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { Container, Logo, UserInfo } from "components";
import {
  Tabs,
  MenuIcon,
  ChannelSelector,
  SearchBar,
  SideMenu,
} from "./components";

import { useThemeStore } from "services/stores/theme";
import {
  CHANNELS,
  DEFAULT_USER,
  SEARCH_VALUES,
  MENUTABS,
  initialState,
} from "./settings";
import { Channel, defaultProps, SearchResults } from "./types";
import { handleContentSearch, reducer, getSelectedTab } from "./utils";
import { sizes } from "styles";
import { HeaderContainer, LogoContainer } from "./styles";

const HeaderComponent = () => {
  const { colorMode, toggleColorMode } = useThemeStore();
  const { pathname } = useLocation();
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    selected: getSelectedTab(pathname),
  });

  const [channels, setChannels] = useState<Array<Channel>>(CHANNELS);
  const [searchValues, setSearchValues] =
    useState<Array<SearchResults>>(SEARCH_VALUES);

  const handleChannelSearch = (value: any) =>
    setChannels(CHANNELS.filter((channel) => channel.name.includes(value)));

  const handleChannelSelect = (value: any) =>
    dispatch({ type: "channel", value });

  const handleSearch = (evt: any) => {
    dispatch({ type: "search", value: evt.target.value });
    setSearchValues(handleContentSearch(SEARCH_VALUES, evt.target.value));
  };

  const handleCloseSearch = () => {
    dispatch({ type: "search", value: "" });
    dispatch({ type: "openSearch", value: false });
  };

  const handleOpenMenu = () =>
    dispatch({ type: "openMenu", value: !state.openMenu });

  const handleOpenSearch = () => {
    dispatch({ type: "openSearch", value: true });
  };

  return (
    <>
      <SideMenu
        open={state.openMenu}
        data={MENUTABS}
        user={DEFAULT_USER}
        {...{ colorMode }}
      />
      <HeaderContainer
        height={[
          sizes.headerMobileHeight,
          sizes.headerMobileHeight,
          sizes.headerMobileHeight,
          sizes.headerDesktopHeight,
        ]}
        width={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Container alignItems="center">
          <MenuIcon open={state.openMenu} setOpen={handleOpenMenu} />
          <LogoContainer>
            <Logo {...{ colorMode }} />
          </LogoContainer>
          {!state.openSearch ? (
            <ChannelSelector
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
            display={["none", "none", "flex"]}
          >
            <Tabs
              data={MENUTABS}
              selected={state.selected}
              setSelected={(value: any) =>
                dispatch({ type: "selected", value })
              }
              {...{ colorMode }}
            />
          </Container>
        ) : (
          <></>
        )}
        <Container alignItems="center" flex={state.openSearch ? 1 : "none"}>
          <SearchBar
            data={searchValues}
            open={state.openSearch}
            onOpen={handleOpenSearch}
            onClose={handleCloseSearch}
            onSearch={handleSearch}
            search={state.search}
            {...{ colorMode }}
          />
          <UserInfo user={DEFAULT_USER} {...{ colorMode, toggleColorMode }} />
        </Container>
      </HeaderContainer>
    </>
  );
};

HeaderComponent.defaultProps = defaultProps;

const Header = memo(HeaderComponent);

export { Header };
