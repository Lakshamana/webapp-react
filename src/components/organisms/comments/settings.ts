import * as Yup from 'yup'
import i18n from 'config/i18n'

export const initialValues = {
  reportReason: ''
}

export const validationSchema = Yup.object().shape({
  reportReason: Yup.string().required(i18n.t('common.error.field_required'))
})
