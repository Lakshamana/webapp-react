import { BrowserRouter } from "react-router-dom";

import { ClientRoutes } from "./routes";
import { permission } from "./permission";

const Router = () => {
  // Is Accesible is an object that must be updated here

  return (
    <>
      <ClientRoutes isAccesible={permission} />
    </>
  );
};

const AppRouter = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export { AppRouter };
