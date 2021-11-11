import { Switch } from "react-router-dom";

import { ClientRoute } from "../../components";
import {
  HomePage,
  LoginPage,
  LiveChat,
  SignupPage,
  Account,
  CollectionsPage,
  PlayerPage,
  MyListPage,
  TagPage,
  SearchPage,
  ChannelList,
  FeedPage,
} from "modules";

const ClientRoutes = ({ isAccesible }: any) => (
  <Switch>
    <ClientRoute
      isAccesible={isAccesible?.livechat}
      path="/livechat"
      component={LiveChat}
      fallback={LoginPage}
    />
    <ClientRoute
      isAccesible={isAccesible?.home}
      path="/home"
      component={HomePage}
      fallback={LoginPage}
    />
    <ClientRoute
      isAccesible={isAccesible?.signup}
      path="/signup"
      component={SignupPage}
      fallback={LoginPage}
    />
    <ClientRoute
      isAccesible={true}
      path="/player"
      component={PlayerPage}
      fallback={LoginPage}
    />
    <ClientRoute
      isAccesible={isAccesible?.mylist}
      path="/mylist"
      component={MyListPage}
      fallback={HomePage}
    />
    <ClientRoute
      isAccesible={isAccesible?.account}
      path="/account"
      component={Account}
      fallback={HomePage}
    />
    <ClientRoute
      isAccesible={isAccesible?.collections}
      path="/collections"
      component={CollectionsPage}
      fallback={HomePage}
    />
    <ClientRoute
      isAccesible={isAccesible?.search}
      path="/search"
      component={SearchPage}
      fallback={HomePage}
    />
    <ClientRoute
      isAccesible={isAccesible?.channelList}
      path="/channelList"
      component={ChannelList}
    />
    <ClientRoute
      isAccesible={isAccesible?.feed}
      path="/feed"
      component={FeedPage}
      fallback={HomePage}
    />
    <ClientRoute
      isAccesible={isAccesible?.tags}
      path="/tags"
      component={TagPage}
      fallback={HomePage}
    />
    <ClientRoute
      isAccesible={isAccesible?.login}
      path="/"
      component={LoginPage}
    />
  </Switch>
);

export { ClientRoutes };
