import * as Yup from "yup";

export const initialValues = {
  language: "english",
};

export const validationSchema = Yup.object().shape({
  language: Yup.string().required("Please select a language"),
});
