import { Container } from "components";
import { ReactComponent as FanheroLogo } from "./logo.svg";
import { ReactComponent as FanheroLogoDark } from "./logo-dark.svg";
import { Props, defaultProps } from "./types";

const Logo = ({ height, width, colorMode, ...props }: Props): any => (
  <Container {...props}>
    {colorMode === "light" ? (
      <FanheroLogoDark {...{ height, width }} />
    ) : (
      <FanheroLogo {...{ height, width }} />
    )}
  </Container>
);

Logo.defaultProps = defaultProps;

export { Logo };
