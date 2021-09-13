import { useEffect } from "react";
import { Route } from "react-router-dom";

import { Props } from "./types";

const ClientRoute: React.FunctionComponent<any> = ({
  path,
  component,
  children,
  isAccesible,
  fallback,
}: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <Route component={isAccesible ? component : fallback} {...{ path }}>
      {children}
    </Route>
  );
};

export { ClientRoute };
