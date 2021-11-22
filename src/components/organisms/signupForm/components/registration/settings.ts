import * as Yup from 'yup'
import i18n from 'config/i18n'

export const initialValues = {
  createAccount: {
    email: '',
    confirm_email: '',
    password: '',
    terms_of_service: false,
  },
}

export const validationSchema = Yup.object().shape({
  createAccount: Yup.object().shape({
    password: Yup.string()
      .required(
        i18n.t('common.error.field_required', {
          field_name: i18n.t('signup.label.password'),
        })
      )
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
        i18n.t('common.error.password_error')
      ),
    email: Yup.string().required(
      i18n.t('common.error.field_required', {
        field_name: i18n.t('signup.label.email'),
      })
    ),
    confirm_email: Yup.string()
      .required(
        i18n.t('common.error.field_required', {
          field_name: i18n.t('signup.label.confirm_email'),
        })
      )
      .oneOf(
        [Yup.ref('email'), null],
        i18n.t('common.error.field_must_match', {
          field_name: i18n.t('signup.label.email'),
        })
      ),
    terms_of_service: Yup.boolean().oneOf(
      [true],
      i18n.t('common.error.accept_terms_and_conditions')
    ),
  }),
})
