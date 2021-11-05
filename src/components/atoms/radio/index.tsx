import { Container } from "components";

import { Radio as RadioComponent } from "@chakra-ui/react";
import { RadioContainer } from "./styles";
import { RadioProps } from "./types";

const Radio = ({ children, spacing, font, ...props }: RadioProps) => (
  <RadioContainer {...{ ...spacing }}>
    <RadioComponent {...props}>
      <Container {...font}>{children}</Container>
    </RadioComponent>
  </RadioContainer>
);

export { Radio };
