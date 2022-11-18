import i18n from 'config/i18n'
import * as Yup from 'yup'

export const validationSchema = Yup.object({
  phoneNumber: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('common.custom_field.phone'),
    })
  ),
  fullName: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: 'Full name',
    })
  ),
  email: Yup.string()
    .email('Email inválido')
    .required(
      i18n.t('common.error.field_required', {
        field_name: 'Email',
      })
    ),
})
