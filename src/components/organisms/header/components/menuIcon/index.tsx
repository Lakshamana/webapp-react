import { Container } from "components";

import { PropsMenuIcon } from "../../types";
import { Parent } from "./styles";

const MenuIcon = ({ open, setOpen, ...props }: PropsMenuIcon) => (
  <Container {...props}>
    <Parent width="25px" onClick={setOpen} {...{ open }}>
      <div />
    </Parent>
  </Container>
);

export { MenuIcon };
