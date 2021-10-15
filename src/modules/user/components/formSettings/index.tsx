import { Button } from "@chakra-ui/react";
import { Container, Text, RadioGroup } from "components";
import { RADIO_LANGUAGES } from "../../settings";

import { colors } from "styles";
import { Line } from "../../styles";

const FormSettings = () => {
  return (
    <>
      <Container flexDirection="column" alignItems="center" mb={4}>
        <Text style={{ textTransform: "uppercase" }} color={colors.white}>
          Delete Account
        </Text>
        <Line selected />
      </Container>

      <Container>
        <RadioGroup
          size="sm"
          name="language"
          title="Language"
          radios={RADIO_LANGUAGES}
          onChange={(radio: any) => console.log(radio)}
        />
      </Container>

      <Container mt={4}>
        <Button colorScheme="blue">Delete Account</Button>
      </Container>
    </>
  );
};

export { FormSettings };
