import { SigninMutationVariables } from "generated/graphql"
import * as Yup from "yup"
import i18n from "config/i18n"

export const initialValues: SigninMutationVariables = {
	signIn: {
		email: "",
		password: ""
	}
}

export const validationSchema = Yup.object().shape({
	signIn: Yup.object().shape({
		password: Yup.string().required(
			i18n.t("signin.error.field_required", {
				field_name: i18n.t("signin.label.email")
			})
		),
		email: Yup.string().required(
			i18n.t("signin.error.field_required", {
				field_name: i18n.t("signin.label.password")
			})
		)
	})
})
