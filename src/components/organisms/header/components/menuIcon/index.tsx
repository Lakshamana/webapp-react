import { PropsMenuIcon } from "../../types";
import { Parent } from "./styles";

const MenuIcon = ({ open, setOpen }: PropsMenuIcon) => (
  <Parent width="25px" onClick={setOpen} {...{ open }}>
    <div />
  </Parent>
);

export { MenuIcon };
