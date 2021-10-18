import { useFormik } from "formik";
import { Stack } from "@chakra-ui/react";
import { Container, Text, Button, Input } from "components";

import { initialValues, validationSchema } from "./settings";
import { colors } from "styles";
import { Line } from "../../styles";

const FormProfile = () => {
  const { values, setFieldValue } = useFormik({
    initialValues: {
      ...initialValues,
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async () => {},
  });

  return (
    <>
      <Container flexDirection="column" alignItems="center" mb={4}>
        <Text style={{ textTransform: "uppercase" }} color={colors.white}>
          Profile Settings
        </Text>
        <Line selected />
      </Container>

      <Container flexDirection="column">
        <Input
          placeholder="Username"
          value={values.username}
          onChange={(evt: any) => setFieldValue("username", evt.target.value)}
        />
        <Input
          placeholder="Email"
          value={values.email}
          onChange={(evt: any) => setFieldValue("email", evt.target.value)}
        />
        <Input
          placeholder="First Name"
          value={values.name}
          onChange={(evt: any) => setFieldValue("name", evt.target.value)}
        />
        <Input
          placeholder="Last Name"
          value={values.lastName}
          onChange={(evt: any) => setFieldValue("lastName", evt.target.value)}
        />
      </Container>

      <Container mt={2}>
        <Button type="submit" label="Reset Password" />
      </Container>

      <Stack spacing={4} direction="row" mt={8}>
        <Button type="submit" label="Save" />
        <Button type="submit" label="Cancel" />
      </Stack>
    </>
  );
};

export { FormProfile };
