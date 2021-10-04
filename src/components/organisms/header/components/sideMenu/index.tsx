import { Container } from "components";
import { PropsSideMenu } from "../../types";
import { SideContainer } from "./styles";
import { colors } from "styles";

const SideMenu = ({ open, setOpen }: PropsSideMenu) => (
  <SideContainer backgroundColor={colors.black} {...{ open }}>
    <Container>{/**/}</Container>
  </SideContainer>
);

export { SideMenu };
