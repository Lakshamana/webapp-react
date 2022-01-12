import React ,{ useEffect } from "react";
import { Route, Redirect  } from "react-router-dom";

import { Props } from "./types";

const ClientRoute = ({
  component: Component,
  path,
  isAccesible,
  redirectTo,
  ...rest
}: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <Route exact path="/" {...rest} render={() => (
      isAccesible
      ? <Component/>
      : <Redirect to={redirectTo} />
    )} />
  );
};

export { ClientRoute };
