import * as Yup from 'yup'
import i18n from 'config/i18n'

export const initialValues = {
  email: '',
}

export const validationSchema = Yup.object().shape({
  email: Yup.string().email(i18n.t('common.error.valid_email')).required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('signin.label.email'),
    })
  ),
})
