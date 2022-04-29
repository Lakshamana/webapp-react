import * as Yup from 'yup'
import i18n from 'config/i18n'

export const initialValues = {
  email: '',
  confirm_email: '',
}

export const validationSchema = Yup.object().shape({
  confirm_email: Yup.string()
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
