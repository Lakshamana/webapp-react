import { Text, Container } from "components";
import { PropsPopoverOption } from "../../types";
import { Option } from "./styles";
import { colors } from "styles";

const PopoverOption = ({ text, icon, onClick }: PropsPopoverOption) => (
  <Option {...{ onClick }} py={2} mb={2}>
    <Container alignItems="center">
      <Container width="30px" ml={3} justifyContent="center">
        {icon}
      </Container>
      <Text ml={2} color={colors.white}>
        {text}
      </Text>
    </Container>
  </Option>
);

export { PopoverOption };
