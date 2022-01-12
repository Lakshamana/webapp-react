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
  ChannelsPage,
  FeedPage,
  RecoverPasswordPage,
  VideoPostViewPage
} from "modules";
import { FormModule } from "modules/form";

const ClientRoutes = ({ isAccesible }: any) => {

  return (
    <Switch>
      <ClientRoute
        isAccesible={isAccesible?.livechat}
        path="/livechat"
        component={LiveChat}
        redirectTo="/login"
      />
      <ClientRoute
        isAccesible={isAccesible?.home}
        path="/home"
        component={HomePage}
        redirectTo="/login"
      />
      <ClientRoute
        isAccesible={isAccesible?.signup}
        path="/signup"
        component={SignupPage}
        redirectTo="/login"
      />
      <ClientRoute
        isAccesible={isAccesible?.login}
        path="/login"
        component={LoginPage}
        redirectTo="/home"
      />
      <ClientRoute
        isAccesible={isAccesible?.recoverPassword}
        path="/recoverPassword"
        component={RecoverPasswordPage}
        redirectTo="/login"
      />
      <ClientRoute
        isAccesible={true}
        path="/player"
        component={PlayerPage}
        redirectTo="/login"
      />
      <ClientRoute
        isAccesible={isAccesible?.mylist}
        path="/mylist"
        component={MyListPage}
        redirectTo="/home"
      />
      <ClientRoute
        isAccesible={isAccesible?.account}
        path="/account"
        component={Account}
        redirectTo="/home"
      />
      <ClientRoute
        isAccesible={isAccesible?.collections}
        path="/collections"
        component={CollectionsPage}
        redirectTo="/home"
      />
      <ClientRoute
        isAccesible={isAccesible?.search}
        path="/search"
        component={SearchPage}
        redirectTo="/home"
      />
      <ClientRoute
        isAccesible={isAccesible?.channels}
        path="/channels"
        component={ChannelsPage}
        redirectTo="/home"
      />
      <ClientRoute
        isAccesible={isAccesible?.feed}
        path="/feed"
        component={FeedPage}
        redirectTo="/home"
      />
      <ClientRoute
        isAccesible={isAccesible?.tags}
        path="/tags"
        component={TagPage}
        redirectTo="/home"
      />
      <ClientRoute
        isAccesible={isAccesible?.login}
        path="/video-post"
        component={VideoPostViewPage}
        redirectTo="/login"
      />
      <ClientRoute
        isAccesible={isAccesible?.login}
        path="/form"
        component={FormModule}
        redirectTo="/login"
      />
      <ClientRoute
        isAccesible={isAccesible?.login}
        path="/"
        component={LoginPage}
        redirectTo="/login"
      />
    </Switch>
  )
};

export { ClientRoutes };
