import { Link } from "react-router-dom";
import { Container, Text } from "components";

import { Props, defaultProps } from "./types";
import { Circle } from "./styles";

const Tab = ({
  link,
  children,
  selected,
  onSelect,
  color,
  ...props
}: Props) => (
  <Link to={link}>
    <Container
      position="relative"
      onClick={onSelect}
      alignItems="center"
      flexDirection="column"
      {...props}
    >
      <Text
        style={{ textTransform: "uppercase", whiteSpace: "nowrap" }}
        fontWeight={selected ? "700" : "400"}
        {...{ color }}
      >
        {children}
      </Text>
      {
        selected &&
        <Circle width={[8]} height={[8]} {...{ selected }} />
      }
    </Container>
  </Link>
);

Tab.defaultProps = defaultProps;

export { Tab };
