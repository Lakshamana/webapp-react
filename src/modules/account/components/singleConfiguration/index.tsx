import { Container, Text } from "components";

import { SingleConfigurationProps } from "./types";
import { colors } from "styles";
import { ActionLink } from "../../styles";

const SingleConfiguration = ({
  text,
  action,
  children,
  fontStyle = { fontWeight: 500, color: colors.grey["800"] },
}: SingleConfigurationProps) => (
  <Container justifyContent="space-between" width={1}>
    <Text {...fontStyle}>{text}</Text>
    {action ? (
      <ActionLink fontSize={12} {...action}>
        {action.text}
      </ActionLink>
    ) : (
      children || <></>
    )}
  </Container>
);

export { SingleConfiguration };
