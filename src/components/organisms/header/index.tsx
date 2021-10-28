import { useState, memo, useReducer } from "react";
import { Container, Logo } from "components";
import {
  Tabs,
  MenuIcon,
  UserInfo,
  ChannelSelector,
  SearchBar,
  SideMenu,
} from "./components";

import {
  CHANNELS,
  DEFAULT_USER,
  SEARCH_VALUES,
  MENUTABS,
  initialState,
} from "./settings";
import { Channel, defaultProps, SearchResults } from "./types";
import { handleContentSearch, reducer } from "./utils";
import { colors, sizes } from "styles";

const HeaderComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
      <SideMenu open={state.openMenu} data={MENUTABS} user={DEFAULT_USER} />
      <Container
        height={[sizes.headerMobileHeight, sizes.headerMobileHeight, sizes.headerMobileHeight, sizes.headerDesktopHeight]}
        width={1}
        px={3}
        alignItems="center"
        justifyContent="space-between"
        backgroundColor={colors.black}
      >
        <Container alignItems="center">
          <MenuIcon open={state.openMenu} setOpen={handleOpenMenu} />
          <Logo mr={3} />
          {!state.openSearch ? (
            <ChannelSelector
              onSelect={handleChannelSelect}
              onSearch={handleChannelSearch}
              selected={state.channel}
              {...{ channels }}
            />
          ) : (
            <></>
          )}
        </Container>
        {!state.openSearch ? (
          <Container
            flex={1}
            ml={2}
            alignItems="center"
            display={["none", "none", "flex"]}
          >
            <Tabs
              data={MENUTABS}
              selected={state.selected}
              setSelected={(value: any) =>
                dispatch({ type: "selected", value })
              }
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
          />
          <UserInfo user={DEFAULT_USER} />
        </Container>
      </Container>
    </>
  );
};

HeaderComponent.defaultProps = defaultProps;

const Header = memo(HeaderComponent);

export { Header };
