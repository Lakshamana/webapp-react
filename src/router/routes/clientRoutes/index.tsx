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
import { useAuth } from "contexts/auth";

const ClientRoutes = ({ isAccesible }: any) => {
  const { kind } = useAuth()

  const isPublicKind = kind === 'public'

  return (
    <Switch>
      <ClientRoute
        isAccesible={isAccesible?.livechat}
        path="/livechat"
        component={LiveChat}
        fallback={isPublicKind ? LiveChat : LoginPage}
      />
      <ClientRoute
        isAccesible={isAccesible?.home}
        path="/home"
        component={HomePage}
        fallback={isPublicKind ? HomePage : LoginPage}
      />
      <ClientRoute
        isAccesible={isAccesible?.signup}
        path="/signup"
        component={SignupPage}
        fallback={isPublicKind ? SignupPage : LoginPage}
      />
      <ClientRoute
        isAccesible={isAccesible?.login}
        path="/login"
        component={LoginPage}
      />
      <ClientRoute
        isAccesible={isAccesible?.recoverPassword}
        path="/recoverPassword"
        component={RecoverPasswordPage}
        fallback={isPublicKind ? RecoverPasswordPage : LoginPage}
      />
      <ClientRoute
        isAccesible={true}
        path="/player"
        component={PlayerPage}
        fallback={isPublicKind ? PlayerPage : LoginPage}
      />
      <ClientRoute
        isAccesible={isAccesible?.mylist}
        path="/mylist"
        component={MyListPage}
        fallback={isPublicKind ? MyListPage : HomePage}
      />
      <ClientRoute
        isAccesible={isAccesible?.account}
        path="/account"
        component={Account}
        fallback={isPublicKind ? Account : HomePage}
      />
      <ClientRoute
        isAccesible={isAccesible?.collections}
        path="/collections"
        component={CollectionsPage}
        fallback={isPublicKind ? CollectionsPage : HomePage}
      />
      <ClientRoute
        isAccesible={isAccesible?.search}
        path="/search"
        component={SearchPage}
        fallback={isPublicKind ? SearchPage : HomePage}
      />
      <ClientRoute
        isAccesible={isAccesible?.channels}
        path="/channels"
        component={ChannelsPage}
        fallback={isPublicKind ? ChannelsPage : HomePage}
      />
      <ClientRoute
        isAccesible={isAccesible?.feed}
        path="/feed"
        component={FeedPage}
        fallback={isPublicKind ? FeedPage : HomePage}
      />
      <ClientRoute
        isAccesible={isAccesible?.tags}
        path="/tags"
        component={TagPage}
        fallback={isPublicKind ? TagPage : HomePage}
      />
      <ClientRoute
        isAccesible={isAccesible?.login}
        path="/video-post"
        component={VideoPostViewPage}
      />
      <ClientRoute
        isAccesible={isAccesible?.login}
        path="/form"
        component={FormModule}
      />
      <ClientRoute
        isAccesible={isAccesible?.login}
        path="/"
        component={isPublicKind ? HomePage : LoginPage}
      />
    </Switch>
  )
};

export { ClientRoutes };
