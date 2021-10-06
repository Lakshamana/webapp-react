import { Container } from "components";
import { PropsMenuIcon } from "../../types";
import { Parent } from "./styles";

const MenuIcon = ({ open, setOpen }: PropsMenuIcon) => (
  <Container display={["flex", "flex", "flex", "none"]} mr={3}>
    <Parent width="25px" onClick={setOpen} {...{ open }}>
      <div />
    </Parent>
  </Container>
);

export { MenuIcon };
