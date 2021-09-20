import { Link } from "react-router-dom";
import { Container, Text } from "components";

import { Props, defaultProps } from "./types";
import { Circle } from "./styles";

const Tab = ({ link, children, selected, onSelect, ...props }: Props) => (
  <Link to={link}>
    <Container
      onClick={onSelect}
      alignItems="center"
      flexDirection="column"
      {...props}
    >
      <Text
        style={{ textTransform: "uppercase" }}
        fontWeight={selected ? "700" : "400"}
        color="white"
      >
        {children}
      </Text>
      <Circle width={[8]} height={[8]} {...{ selected }} />
    </Container>
  </Link>
);

Tab.defaultProps = defaultProps;

export { Tab };
