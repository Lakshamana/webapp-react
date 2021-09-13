import { BrowserRouter } from "react-router-dom";

import { ClientRoutes } from "./routes";

const Router = () => {
  // Is Accesible is an object that must be updated here

  return (
    <>
      <ClientRoutes isAccesible={{ dashboard: true, login: true }} />
    </>
  );
};

const AppRouter = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export { AppRouter };
