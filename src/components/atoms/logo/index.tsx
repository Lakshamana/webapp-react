import { Container } from "components";
import { ReactComponent as FanheroLogo } from "./logo.svg";
import { Props, defaultProps } from "./types";

const Logo = ({ height, width, ...props }: Props): any => (
  <Container {...props}>
    <FanheroLogo {...{ height, width }} />
  </Container>
);

Logo.defaultProps = defaultProps;

export { Logo };
