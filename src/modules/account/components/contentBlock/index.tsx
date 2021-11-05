import { Container } from "components";
import { SingleConfiguration } from "..";

import { ContentBlockProps } from "./types";

const ContentBlock = ({
  title,
  action,
  children,
  idented,
}: ContentBlockProps) => (
  <Container width={[1, 1, "32%"]} flexDirection="column" mb={3}>
    <SingleConfiguration
      fontStyle={{ fontWeight: "bold", marginLeft: [0, 0, "24px"] }}
      text={title}
      {...{ action, idented }}
    />
    {children}
  </Container>
);

export { ContentBlock };
