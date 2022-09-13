import i18n from 'config/i18n'
import * as Yup from 'yup'

export const initialValues = {
  email: '',
  confirm_email: '',
}

export const validationSchema = Yup.object().shape({
  confirm_email: Yup.string().lowercase()
    .required(
      i18n.t('common.error.field_required', {
        field_name: i18n.t('signin.label.email'),
      })
    )
    .oneOf(
        [Yup.ref('email'), null],
        i18n.t('common.error.confirm_email')
      ),
})
