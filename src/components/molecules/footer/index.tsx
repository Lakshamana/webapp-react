import { Text, Container, Logo } from "components";

import { TextFooter } from "./style";
import { Props, defaultProps } from "./types";
import { colors } from "styles";

const Footer = ({ text }: Props) => (
  <Container
    display="flex"
    width={1}
    px={3}
    alignItems="center"
    backgroundColor={colors.black}
    flexDirection={["column", "row"]}
    justifyContent={["center", "space-between"]}
    minHeight={["250px", "100px"]}
  >
    <Logo py={[3, 0]} width={161} height={44} />
    <TextFooter>
      <Text color={colors.white} py={[3, 0]} fontSize={["16px", "12px"]}>
        {text}
      </Text>
    </TextFooter>
    <div>{/**/}</div>
  </Container>
);

Footer.defaultProps = defaultProps;

export { Footer };
