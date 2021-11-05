import { ExternalFooter, ExternalHeader } from "components";
import { ChildContainer, LayoutContainer } from "./style";
import { Props, defaultProps } from "./types";
import { defaultBackground } from "./settings";

const LoginLayout = ({
  children,
  backgroundImage = defaultBackground,
  rightContent,
  rightContentStyle = {},
  mode,
  ...props
}: Props) => (
  <LayoutContainer flexDirection="column">
    <ExternalHeader {...{ mode, rightContent, rightContentStyle }} />
    <ChildContainer
      justifyContent={"center"}
      width={1}
      {...{ ...props, backgroundImage }}
    >
      {children}
    </ChildContainer>
    <ExternalFooter />
  </LayoutContainer>
);

LoginLayout.defaultProps = defaultProps;

export { LoginLayout };
