import { Header, Container } from "components";

import { Props, defaultProps } from "./types";

const Layout = ({ children, ...props }: Props) => (
  <Container flexDirection="column">
    <Header />
    {children}
  </Container>
);

Layout.defaultProps = defaultProps;

export { Layout };
