import { BrowserRouter } from "react-router-dom";

import { ClientRoutes } from "./routes";
import { publicPermission, exclusivePermission } from "./permission";
import { useAuth } from "contexts/auth";

const Router = () => {
  const { kind } = useAuth()

  const isPublicKind = kind === 'public'

  return (
    <>
      <ClientRoutes isAccesible={isPublicKind ? publicPermission : exclusivePermission} />
    </>
  );
};

const AppRouter = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export { AppRouter };
