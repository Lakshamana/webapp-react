import { Container, Text } from "components";

import { SubscriptionProps } from "./types";
import { colors } from "styles";
import { Separator } from "../../styles";

const Subscription = ({
  value,
  title,
  subtitle,
  separator = true,
  fontStyle = { fontSize: 16, color: colors.grey["800"] },
  fontValueStyle = { fontSize: 14, color: colors.grey["800"] },
}: SubscriptionProps) => (
  <>
    <Container my={3} width={1} justifyContent="space-between">
      <Container flexDirection="column">
        <Text {...fontStyle}>{title}</Text>
        {subtitle ? (
          <Text color={colors.grey["800"]} fontSize={14}>
            Flameng - Campeonato Carioca
          </Text>
        ) : (
          <></>
        )}
      </Container>
      <Text {...fontValueStyle}>{value}</Text>
    </Container>
    {separator ? <Separator /> : <> </>}
  </>
);

export { Subscription };
