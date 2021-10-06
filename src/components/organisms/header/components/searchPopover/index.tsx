import { Container, Text } from "components";
import { PropsSearchPopover } from "../../types";
import { ScrollContainer } from "./styles";
import { colors } from "styles";

const SearchPopover = ({ data }: PropsSearchPopover) => (
  <ScrollContainer maxHeight={250} flexDirection="column" width={1}>
    {data.map((item) => (
      <>
        <Container key={item.id} backgroundColor={colors.black} width={1} p={3}>
          <Text color={colors.white}>{item.label?.toUpperCase()}</Text>
        </Container>
        {item.children.map((content) => (
          <Container key={content.id} p={3}>
            <Text color={colors.white}>{content.text}</Text>
          </Container>
        ))}
      </>
    ))}
  </ScrollContainer>
);

export { SearchPopover };
