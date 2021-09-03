import React from "react";

import { Props, defaultProps } from "./types";

import { StyleContainer } from "./styles";

const Container = (props: Props) => (
  <StyleContainer {...props}>{props.children}</StyleContainer>
);

Container.defaultProps = defaultProps;

export { Container };
