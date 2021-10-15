import { Button, Stack } from "@chakra-ui/react";
import { Container, Text, Input } from "components";

import { colors } from "styles";
import { Line } from "../../styles";

const FormProfile = () => {
  return (
    <>
      <Container flexDirection="column" alignItems="center" mb={4}>
        <Text style={{ textTransform: "uppercase" }} color={colors.white}>
          Profile Settings
        </Text>
        <Line selected />
      </Container>

      <Container flexDirection="column">
        <Input placeholder="Username" value={""} onChange={() => {}} />
        <Input placeholder="Email" value={""} onChange={() => {}} />
        <Input placeholder="First Name" value={""} onChange={() => {}} />
        <Input placeholder="Last Name" value={""} onChange={() => {}} />
      </Container>

      <Container mt={2}>
        <Button colorScheme="blue">Reset Password</Button>
      </Container>

      <Stack spacing={4} direction="row" mt={8}>
        <Button colorScheme="blue">Save</Button>
        <Button colorScheme="blue">Cancel</Button>
      </Stack>
    </>
  );
};

export { FormProfile };
