import { Switch } from "react-router-dom";

import { ClientRoute } from "../../components";

<<<<<<< HEAD
import { HomePage, LoginPage, LiveChat, User, SignupPage } from "modules";
=======
import { DashboardPage, LoginPage, LiveChat, User, SignupPage, PlayerPage } from "modules";
>>>>>>> 8b24c7e... chore: adjust conflict to add page

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
    <ClientRoute isAccesible={isAccesible?.login} path="/" component={LoginPage} />
  </Switch>
);

export { ClientRoutes };
