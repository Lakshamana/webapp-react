import { Text, Container } from "components";
import { PropsPopoverOption } from "../../types";
import { Option } from "./styles";

const PopoverOption = ({ text, icon, onClick, color }: PropsPopoverOption) => (
  <Option {...{ onClick }} py={'12px'}>
    <Container alignItems="center">
      <Container width="30px" ml={3} justifyContent="center">
        {icon}
      </Container>
      <Text ml={2} {...{ color }}>
        {text}
      </Text>
    </Container>
  </Option>
);

export { PopoverOption };
