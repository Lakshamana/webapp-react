import { useFormik } from "formik";
import { Container, Button, Text, RadioGroup } from "components";
import { RADIO_LANGUAGES } from "../../settings";

import { initialValues, validationSchema } from "./settings";
import { colors } from "styles";
import { Line } from "../../styles";

const FormSettings = () => {
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
          defaultValue={values.language}
          onChange={({ value }: any) => setFieldValue("language", value)}
        />
      </Container>

      <Container mt={4}>
        <Button type="submit" label="Delete Account" />
      </Container>
    </>
  );
};

export { FormSettings };
