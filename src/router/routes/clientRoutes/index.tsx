import { Switch, Redirect } from 'react-router-dom'

import { ClientRoute } from '../../components'
import {
  HomePage,
  LoginPage,
  SignupPage,
  AccountPage,
  CollectionsPage,
  MyListPage,
  TagPage,
  SearchPage,
  ChannelsPage,
  FeedPage,
  RecoverPasswordPage,
  VideoPostViewPage,
  LiveChat,
  LiveEvent
} from 'modules'

import { MainLayout, LoginLayout } from 'components'

const ClientRoutes = ({ isAccesible }: any) => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <ClientRoute
        isAccesible={isAccesible?.home}
        path="/home"
        component={HomePage}
        redirectTo="/login"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.signup}
        path="/signup"
        component={SignupPage}
        redirectTo="/login"
        template={LoginLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.login}
        path="/login"
        component={LoginPage}
        redirectTo="/home"
        template={LoginLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.recoverPassword}
        path="/recoverPassword"
        component={RecoverPasswordPage}
        redirectTo="/login"
        template={LoginLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.mylist}
        path="/mylist"
        component={MyListPage}
        redirectTo="/home"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.account}
        path="/account"
        component={AccountPage}
        redirectTo="/home"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.collections}
        path="/collections"
        component={CollectionsPage}
        redirectTo="/home"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.search}
        path="/search"
        component={SearchPage}
        redirectTo="/home"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.channels}
        path="/channels"
        component={ChannelsPage}
        redirectTo="/home"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.feed}
        path="/feed"
        component={FeedPage}
        redirectTo="/home"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.tags}
        path="/tags"
        component={TagPage}
        redirectTo="/home"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.login}
        path="/video-post"
        component={VideoPostViewPage}
        redirectTo="/login"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.livechat}
        path="/livechat"
        component={LiveChat}
        redirectTo="/login"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={true}
        path="/livestreams"
        component={LiveEvent}
        redirectTo="/login"
        template={MainLayout}
      />
    </Switch>
  )
}

export { ClientRoutes }
