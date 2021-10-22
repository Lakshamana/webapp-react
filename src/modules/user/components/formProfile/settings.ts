import * as Yup from "yup";

export const initialValues = {
  username: "",
  name: "",
  email: "",
  lastName: "",
};

export const validationSchema = Yup.object().shape({
  username: Yup.string().required("Please insert username"),
  name: Yup.string().required("Please insert name"),
  email: Yup.string().required("Please insert email"),
  lastName: Yup.string()
    .email("Please insert a valid email format")
    .required("Please insert last name"),
});
