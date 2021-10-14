import { ExternalFooter, ExternalHeader } from "components";
import { ChildContainer, LayoutContainer } from "./style"
import { Props, defaultProps } from "./types";

const LoginLayout = ({ children, ...props }: Props) => (
  <LayoutContainer flexDirection="column">
    <ExternalHeader />
    <ChildContainer justifyContent={'center'} {...props} width={1} backgroundImage={'https://image.fanherocdn.com/com.fanhero.5e7d2539b85308000497bc5a/photo/5e83c0db4d88ba002f3cd2c2/original'}>
      {children}
    </ChildContainer>
    <ExternalFooter />
  </LayoutContainer>
);

LoginLayout.defaultProps = defaultProps;

export { LoginLayout };
