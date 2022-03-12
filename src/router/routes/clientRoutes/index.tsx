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
  VideoPostView,
  FeedPage,
  RecoverPasswordPage,
  Livestreams,
  NotFound,
  LiveChat
} from 'modules'

import { MainLayout, LoginLayout, EmptyLayout } from 'components'

const ClientRoutes = ({ isAccesible }: any) => {
  return (
    <Switch>
      {/* TO-DO temporary redirects. Should not exist when the API returns posts without the need to send a channel */}
      <Redirect exact from="/" to="/channels" />
      <ClientRoute
        isAccesible={isAccesible?.mylist}
        path="/c/:channel/mylist"
        component={MyListPage}
        redirectTo="/c/:channel"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.account}
        path="/account"
        component={AccountPage}
        redirectTo="/c/:channel"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.collections}
        path="/c/:channel/collections"
        component={CollectionsPage}
        redirectTo="/c/:channel"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.search}
        path="/c/:channel/search"
        component={SearchPage}
        redirectTo="/c/:channel"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.feed}
        path="/c/:channel/feed"
        component={FeedPage}
        redirectTo="/c/:channel"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.tags}
        path="/c/:channel/tags"
        component={TagPage}
        redirectTo="/c/:channel"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={true}
        path="/c/:channel/livestreams"
        component={Livestreams}
        redirectTo="/channels"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={true}
        path="/c/:channel/post/:id"
        component={VideoPostView}
        redirectTo="/channels"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.home}
        path="/c/:channel"
        component={HomePage}
        redirectTo="/login"
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={isAccesible?.channels}
        path="/channels"
        component={ChannelsPage}
        redirectTo="/login"
        template={EmptyLayout}
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
        redirectTo="/"
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
        isAccesible={true}
        template={MainLayout}
        component={NotFound}
      />
    </Switch>
  )
}

export { ClientRoutes }
