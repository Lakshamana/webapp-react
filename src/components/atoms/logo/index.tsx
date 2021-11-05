import { Container } from "components";
import { ReactComponent as FanheroLogo } from "./logo.svg";
import { ReactComponent as FanheroLogoDark } from "./logo-dark.svg";
import { Props, defaultProps } from "./types";

const Logo = ({ height, width, mode, ...props }: Props): any => (
  <Container {...props}>
    {mode === "light" ? (
      <FanheroLogoDark {...{ height, width }} />
    ) : (
      <FanheroLogo {...{ height, width }} />
    )}
  </Container>
);

Logo.defaultProps = defaultProps;

export { Logo };
