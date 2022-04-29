import * as Yup from 'yup'
import i18n from 'config/i18n'

export const initialValues = {
  password: '',
}

export const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required(
      i18n.t('common.error.field_required', {
        field_name: i18n.t('page.account.password'),
      })
    )
})
