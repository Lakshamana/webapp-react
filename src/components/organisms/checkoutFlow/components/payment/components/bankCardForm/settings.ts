import i18n from 'config/i18n'
import * as Yup from 'yup'

export const initialValues = {
  card_holder_name: '',
  month: '',
  year: '',
  terms: false,
}

export const validationSchema = Yup.object().shape({
  card_holder_name: Yup.string().required(
    i18n.t('page.checkout.card_info.mistakes.full_name_required')
  ),
  month: Yup.string().required(
    i18n.t('page.checkout.card_info.mistakes.month_required')
  ),
  year: Yup.string().required(
    i18n.t('page.checkout.card_info.mistakes.year_required')
  ),
  terms: Yup.bool().oneOf(
    [true],
    i18n.t('common.error.accept_terms_and_conditions')
  ),
})
