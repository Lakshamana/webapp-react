import { Switch } from "react-router-dom";

import { ClientRoute } from "../../components";
import { HomePage, LoginPage, LiveChat, User, SignupPage, CollectionsPage, PlayerPage, MyListPage, SearchPage } from "modules";

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
      isAccesible={isAccesible?.user}
      path="/user"
      component={User}
      fallback={LoginPage}
    />
    <ClientRoute
      isAccesible={isAccesible?.user}
      path="/signup"
      component={SignupPage}
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
    <ClientRoute isAccesible={isAccesible?.login} path="/" component={LoginPage} />
  </Switch>
);

export { ClientRoutes };
