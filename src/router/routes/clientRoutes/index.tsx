import { Switch } from "react-router-dom";

import { ClientRoute } from "../../components";

import { Dashboard, Login } from "modules";

// Examples
const ClientRoutes = ({ isAccesible }: any) => (
  <Switch>
    <ClientRoute
      isAccesible={isAccesible?.dashboard}
      path="/dashboard"
      component={Dashboard}
      fallback={Login}
    />
    <ClientRoute isAccesible={isAccesible?.login} path="/" component={Login} />
  </Switch>
);

export { ClientRoutes };
