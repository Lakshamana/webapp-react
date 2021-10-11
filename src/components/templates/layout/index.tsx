import { Header, Footer } from "components";
import { ChildContainer, LayoutContainer } from "./styles";
import { Props, defaultProps } from "./types";

const Layout = ({ children, ...props }: Props) => (
  <LayoutContainer flexDirection="column">
    <Header />
    <ChildContainer {...props} width={1}>
      {children}
    </ChildContainer>
    <Footer />
  </LayoutContainer>
);

Layout.defaultProps = defaultProps;

export { Layout };
