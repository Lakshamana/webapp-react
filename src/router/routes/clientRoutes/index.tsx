import { Switch, Redirect } from 'react-router-dom'

import { ClientRoute } from '../../components'
import {
  HomePage,
  LoginPage,
  SignupPage,
  AccountPage,
  CategoriesPage,
  CategoryPage,
  MyListPage,
  TagPage,
  SearchPage,
  ChannelsPage,
  FeedPage,
  RecoverPasswordPage,
  Livestreams,
  NotFound,
  CheckoutLogin,
  CheckoutCustomField,
  CardInfo,
  Password,
  ActivateAccount,
  VideoPostPage,
  LivePostPage,
} from 'modules'

import { MainLayout, LoginLayout, EmptyLayout } from 'components'
import { useAuth } from 'contexts/auth'

const ClientRoutes = () => {
  const { signed } = useAuth()

  return (
    <Switch>
      {/* TODO temporary redirects. Should not exist when the API returns posts without the need to send a channel */}
      <Redirect exact from="/" to="/channels" />
      <ClientRoute
        isAccesible={signed}
        path="/c/:channel/mylist"
        component={MyListPage}
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={signed}
        path="/account"
        component={AccountPage}
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={signed}
        path="/checkout/login"
        component={CheckoutLogin}
        template={EmptyLayout}
      />
      <ClientRoute
        isAccesible={signed}
        path="/checkout/more-info"
        component={CheckoutCustomField}
        template={EmptyLayout}
      />
      <ClientRoute
        isAccesible={signed}
        path="/checkout/card-info"
        component={CardInfo}
        template={EmptyLayout}
      />
      <ClientRoute
        isAccesible={signed}
        path="/checkout/password"
        component={Password}
        template={EmptyLayout}
      />
      <ClientRoute
        isAccesible={signed}
        path="/c/:channel/categories"
        component={CategoriesPage}
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={signed}
        path="/c/:channel/category/:slug"
        component={CategoryPage}
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={signed}
        path="/c/:channel/search"
        component={SearchPage}
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={signed}
        path="/c/:channel/feed"
        component={FeedPage}
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={signed}
        path="/c/:channel/tag/:slug"
        component={TagPage}
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={signed}
        path="/c/:channel/lives"
        component={Livestreams}
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={signed}
        path="/c/:channel/live/:slug"
        component={LivePostPage}
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={signed}
        path="/c/:channel/post/:slug"
        component={VideoPostPage}
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={signed}
        path="/c/:channel"
        component={HomePage}
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={signed}
        path="/channels"
        component={ChannelsPage}
        template={EmptyLayout}
      />
      <ClientRoute
        isAccesible={!signed}
        path="/signup"
        component={SignupPage}
        template={LoginLayout}
      />
      <ClientRoute
        isAccesible={!signed}
        path="/login"
        component={LoginPage}
        template={LoginLayout}
      />
      <ClientRoute
        isAccesible={!signed}
        path="/activation"
        component={ActivateAccount}
        template={LoginLayout}
      />
      <ClientRoute
        isAccesible={!signed}
        path="/recoverPassword"
        component={RecoverPasswordPage}
        template={LoginLayout}
      />
      <ClientRoute
        isAccesible={signed}
        template={EmptyLayout}
        component={NotFound}
      />
    </Switch>
  )
}

export { ClientRoutes }
