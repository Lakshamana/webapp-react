import { Link } from "react-router-dom";
import { Container, Text } from "components";
import { PropsSideMenu } from "../../types";
import { SideContainer, ScrollContainer } from "./styles";
import { colors } from "styles";

const SideMenu = ({ open, data }: PropsSideMenu) => (
  <SideContainer backgroundColor={colors.black} {...{ open }}>
    <ScrollContainer
      flexDirection="column"
      display={open ? "flex" : "none"}
      my={3}
    >
      {data?.map((item: any) => (
        <Link to={item.url} key={`Path-${item.id}`}>
          <Container width={1} pl={3} py={3}>
            <Text style={{ textTransform: "uppercase" }} color={colors.white}>
              {item.label}
            </Text>
          </Container>
        </Link>
      ))}
    </ScrollContainer>
  </SideContainer>
);

export { SideMenu };
