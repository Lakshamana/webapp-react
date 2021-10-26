import { ExternalFooter, ExternalHeader } from "components";
import { ChildContainer, LayoutContainer } from "./style"
import { Props, defaultProps } from "./types";

const LoginLayout = ({ children, ...props }: Props) => (
  <LayoutContainer flexDirection="column">
    <ExternalHeader />
    <ChildContainer justifyContent={'center'} {...props} width={1} backgroundImage={'https://image.fanherocdn.com/1920x1080/com.fanhero.5c926da8e117d200047d500e/photo/6169b4c5afd43a002b33258d/original'}>
      {children}
    </ChildContainer>
    <ExternalFooter />
  </LayoutContainer>
);

LoginLayout.defaultProps = defaultProps;

export { LoginLayout };
