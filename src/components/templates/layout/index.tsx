import { Header, Container, Footer } from "components";
import { Props, defaultProps } from "./types";

const Layout = ({ children }: Props) => (
  <Container flexDirection="column" width={1} minHeight="100vh">
    <Header />
    <Container height="100%">{children}</Container>
    <Footer />
  </Container>
);

Layout.defaultProps = defaultProps;

export { Layout };
