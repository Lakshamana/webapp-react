import { Switch } from "react-router-dom";

import { ClientRoute } from "../../components";

import { DashboardPage, LoginPage, LiveChat, User, SignupPage } from "modules";

const ClientRoutes = ({ isAccesible }: any) => (
  <Switch>
    <ClientRoute
      isAccesible={isAccesible?.livechat}
      path="/livechat"
      component={LiveChat}
      fallback={LoginPage}
    />
    <ClientRoute
      isAccesible={isAccesible?.dashboard}
      path="/dashboard"
      component={DashboardPage}
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
      fallback={LoginPage}
    />
    <ClientRoute isAccesible={isAccesible?.login} path="/" component={LoginPage} />
  </Switch>
);

export { ClientRoutes };
