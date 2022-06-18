import * as Yup from 'yup'
import i18n from 'config/i18n'

export const initialValues = {
  currentPassword: '',
  newPassword: '',
  newPasswordConfirmation: '',
}

export const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('page.account.current_password'),
    })
  ),
  newPassword: Yup.string()
    .required(
      i18n.t('common.error.field_required', {
        field_name: i18n.t('page.account.new_password'),
      })
    )
    .notOneOf(
      [Yup.ref('currentPassword'), null],
      i18n.t('common.error.same_password_error')
    )
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
      i18n.t('common.error.password_error')
    ),
  newPasswordConfirmation: Yup.string()
    .required(
      i18n.t('common.error.field_required', {
        field_name: i18n.t('page.account.confirm_new_password'),
      })
    )
    .oneOf(
      [Yup.ref('newPassword'), null],
      i18n.t('common.error.field_must_match', {
        field_name: i18n.t('page.account.new_password'),
      })
    ),
})
