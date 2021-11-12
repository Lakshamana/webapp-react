import { ReactComponent as FanheroLogo } from "./logo.svg";
import { Props, defaultProps } from "./types";
import { LogoContainer } from "./styles";

const Logo = ({ height, width, ...props }: Props): any => (
  <LogoContainer {...props}>
    <FanheroLogo {...{ height, width }} />
  </LogoContainer>
);

Logo.defaultProps = defaultProps;

export { Logo };
