import { Container } from "components";
import { PropsMenuIcon } from "../../types";
import { Parent } from "./styles";

const MenuIcon = ({ open, setOpen }: PropsMenuIcon) => (
  <Container display="flex">
    <Parent width="25px" onClick={setOpen} {...{ open }}>
      <div />
    </Parent>
  </Container>
);

export { MenuIcon };
