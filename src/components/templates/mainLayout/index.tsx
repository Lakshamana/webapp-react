import { Header, InternalFooter } from "components";
import { ChildContainer, LayoutContainer } from "./style";
import { Props, defaultProps } from "./types";

const MainLayout = ({ children, ...props }: Props) => (
  <LayoutContainer flexDirection="column">
    <Header />
    <ChildContainer {...props} width={1}>
      {children}
    </ChildContainer>
    <InternalFooter />
  </LayoutContainer>
);

MainLayout.defaultProps = defaultProps;

export { MainLayout };
