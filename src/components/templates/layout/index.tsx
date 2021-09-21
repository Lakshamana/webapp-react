import { Header, Container, Footer } from "components";

import { Props, defaultProps } from "./types";

const Layout = ({ children, ...props }: Props) => (
  <Container flexDirection="column">
    <Header />
    {children}
    <Footer/>
  </Container>
);

Layout.defaultProps = defaultProps;

export { Layout };
