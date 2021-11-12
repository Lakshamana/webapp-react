import * as Yup from "yup"
import i18n from "config/i18n"

export const initialValues = {
	createAccount: {
		email: "",
		// confirm_email: "",
		password: ""
	}
}

export const validationSchema = Yup.object().shape({
	createAccount: Yup.object().shape({
		password: Yup.string().required(
			i18n.t("common.error.field_required", {
				field_name: i18n.t("signup.label.password")
			})
		),
		email: Yup.string().required(
			i18n.t("common.error.field_required", {
				field_name: i18n.t("signup.label.email")
			})
		),
		// confirm_email: Yup.string().oneOf(
		// 	[Yup.ref("email"), null],
		// 	i18n.t("common.error.field_must_match", {
		// 		field_name: i18n.t("signup.label.password")
		// 	})
		// )
	})
})
