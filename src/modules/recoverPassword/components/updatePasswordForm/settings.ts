import * as Yup from 'yup'
import i18n from 'config/i18n'

export const initialValues = {
  oobCode: '',
  password: '',
}

export const validationSchema = Yup.object().shape({
  oobCode: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('recoverPassword.label.code'),
    })
  ),
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
})
