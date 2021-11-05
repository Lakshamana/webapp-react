import { Icon } from "@iconify/react-with-api";
import { Container, Text } from "components";

import { NavbarProps } from "./types";
import { BackTextBox } from "../../styles";

const Navbar = ({ onClick }: NavbarProps) => (
  <Container width={1} alignItems="center" mt={2} mb={4}>
    <div style={{ cursor: "pointer" }}>
      <Icon icon="mdi:arrow-left" width={20} {...{ onClick }} />
    </div>
    <BackTextBox ml={2} px={2}>
      <Text fontWeight="bold">Back</Text>
    </BackTextBox>
  </Container>
);

export { Navbar };
