import * as Yup from 'yup'
import i18n from 'config/i18n'

export const initialValues = {
  newEmail: '',
  newEmailConfirmation: '',
  password: '',
}

export const validationSchema = Yup.object().shape({
  newEmail: Yup.string()
    .required(
      i18n.t('common.error.field_required', {
        field_name: i18n.t('page.account.new_email'),
      })
    )
    .email(),
  newEmailConfirmation: Yup.string()
    .required(
      i18n.t('common.error.field_required', {
        field_name: i18n.t('page.account.confirm_new_email'),
      })
    )
    .email()
    .oneOf(
      [Yup.ref('newEmail'), null],
      i18n.t('common.error.field_must_match', {
        field_name: i18n.t('page.account.confirm_new_email'),
      })
    ),
  password: Yup.string()
    .required(
      i18n.t('common.error.field_required', {
        field_name: i18n.t('page.account.password'),
      })
    )
})
