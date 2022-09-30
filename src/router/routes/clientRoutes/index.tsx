import { Redirect, Switch } from 'react-router-dom'

import {
  AccountPage,
  ActivateAccount,
  CardInfo,
  CategoriesPage,
  CategoryPage,
  ChannelsPage,
  CheckoutCustomField,
  CheckoutLogin,
  FeedPage,
  HomePage,
  LiveEvent,
  LiveEvents,
  LoginPage,
  MyListPage,
  NotAuthorized,
  NotFound,
  Password,
  PostPage,
  RecoverPasswordPage,
  SearchPage,
  SignupPage,
  TagPage
} from 'modules'
import { ClientRoute } from '../../components'

import { EmptyLayout, LoginLayout, MainLayout } from 'components'
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
        component={LiveEvents}
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={signed}
        path="/c/:channel/live/:slug"
        component={LiveEvent}
        template={MainLayout}
      />
      <ClientRoute
        isAccesible={true}
        path="/c/:channel/post/:slug"
        component={PostPage}
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
        template={MainLayout}
        templateProps={{ emptyHeader: true }}
      />
      <ClientRoute
        isAccesible={true}
        path="/signup"
        component={SignupPage}
        template={LoginLayout}
      />
      <ClientRoute
        isAccesible={true}
        path="/login"
        component={LoginPage}
        template={LoginLayout}
      />
      <ClientRoute
        isAccesible={true}
        path="/activation"
        component={ActivateAccount}
        template={LoginLayout}
      />
      <ClientRoute
        isAccesible={true}
        path="/recoverPassword"
        component={RecoverPasswordPage}
        template={LoginLayout}
      />
      <ClientRoute
        isAccesible={true}
        path="/create-your-account"
        template={EmptyLayout}
        component={NotAuthorized}
      />
      <ClientRoute
        isAccesible={true}
        template={EmptyLayout}
        component={NotFound}
      />
    </Switch>
  )
}

export { ClientRoutes }
