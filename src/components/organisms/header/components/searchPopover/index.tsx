import { Container, Text } from "components";
import { PropsSearchPopover } from "../../types";
import { ScrollContainer } from "./styles";

const SearchPopover = ({
  data,
  textColor,
  section,
}: PropsSearchPopover) => {
  return (
    <ScrollContainer maxHeight={250} flexDirection="column" width={1}>
      {data.map((item) => (
        <>
          <Container key={item.id} backgroundColor={section} width={1} py={2} px={3}>
            <Text fontWeight="bold" fontSize="14px" color={textColor} >{item.label?.toUpperCase()}</Text>
          </Container>
          {item.children.map((content) => (
            <Container key={content.id} p={3}>
              <Text fontSize="18px"  color={textColor}>{content.text}</Text>
            </Container>
          ))}
        </>
      ))}
    </ScrollContainer>
  )
};

export { SearchPopover };
