import * as Yup from 'yup'
import i18n from 'config/i18n'

export const initialValues = {
  payload: {
    email: '',
    password: '',
  },
}

export const validationSchema = Yup.object().shape({
  payload: Yup.object().shape({
    password: Yup.string().required(
      i18n.t('common.error.field_required', {
        field_name: i18n.t('signin.label.password'),
      })
    ),
    email: Yup.string()
      .required(
        i18n.t('common.error.field_required', {
          field_name: i18n.t('signin.label.email'),
        })
      )
      .email(i18n.t('common.error.valid_email')),
  }),
})
