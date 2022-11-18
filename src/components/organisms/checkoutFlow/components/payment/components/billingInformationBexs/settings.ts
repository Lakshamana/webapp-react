import i18n from 'config/i18n'
import * as Yup from 'yup'

export const validationSchema = Yup.object({
  cpf: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('page.checkout.card_info.CPF'),
    })
  ),
  state: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('page.checkout.card_info.state'),
    })
  ),
  address1: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('page.checkout.card_info.address01'),
    })
  ),
  address2: Yup.string(),
  number: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('page.checkout.card_info.number'),
    })
  ),
  zip: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('page.checkout.card_info.zip_code'),
    })
  ),
  district: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('page.checkout.card_info.district'),
    })
  ),
  city: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('page.checkout.card_info.city'),
    })
  ),
})
