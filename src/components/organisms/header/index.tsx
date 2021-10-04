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
  initialState,
} from "./settings";
import { Channel, defaultProps, SearchResults } from "./types";
import { handleContentSearch, reducer } from "./utils";
import { colors } from "styles";

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

  const renderAccesibilitySection = () => {
    if (!state.openSearch)
      return (
        <Container
          alignItems="center"
          display={["none", "none", "none", "flex"]}
        >
          <ChannelSelector
            onSelect={handleChannelSelect}
            onSearch={handleChannelSearch}
            selected={state.channel}
            {...{ channels }}
          />
          <Tabs
            selected={state.selected}
            setSelected={(value: any) => dispatch({ type: "selected", value })}
          />
        </Container>
      );

    return <></>;
  };

  return (
    <>
      <SideMenu open={state.openMenu} setOpen={handleOpenMenu} data={[]} />
      <Container
        height={[70, 70, 70, 100]}
        width={1}
        alignItems="center"
        justifyContent="space-between"
        backgroundColor={colors.black}
      >
        <Container alignItems="center" justifyContent="space-between" flex={1}>
          <Container alignItems="center">
            <MenuIcon open={state.openMenu} setOpen={handleOpenMenu} ml={4} />
            <Logo mx={4} />
            {renderAccesibilitySection()}
          </Container>
          <SearchBar
            data={searchValues}
            open={state.openSearch}
            onOpen={handleOpenSearch}
            onClose={handleCloseSearch}
            onSearch={handleSearch}
            search={state.search}
          />
        </Container>
        <Container
          alignItems="center"
          display={["none", "none", "none", "flex"]}
        >
          <UserInfo user={DEFAULT_USER} />
        </Container>
      </Container>
    </>
  );
};

HeaderComponent.defaultProps = defaultProps;

const Header = memo(HeaderComponent);

export { Header };
