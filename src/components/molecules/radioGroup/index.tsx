import { Container, Text, Radio } from "components";
import { RadioGroup as RadioGroupComponent } from "@chakra-ui/react";
import { colors } from "styles";
import { RadioGroupProps, defaultProps } from "./types";

const RadioGroup = ({
  radios,
  title,
  size,
  name,
  color,
  onChange,
  ...props
}: RadioGroupProps) => (
  <Container {...props}>
    {title ? <Text color={colors.white}>{title}</Text> : <></>}
    <Container mt={2}>
      <RadioGroupComponent {...{ name }}>
        {radios?.map((radio) => (
          <Radio
            key={radio.id}
            onChange={() => onChange(radio)}
            {...{ ...radio, size, color }}
          >
            {radio.children}
          </Radio>
        ))}
      </RadioGroupComponent>
    </Container>
  </Container>
);

RadioGroup.defaultProps = defaultProps;

export { RadioGroup };
