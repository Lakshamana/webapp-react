import i18n from 'config/i18n'
import * as Yup from 'yup'

export const initialValues = {
  full_name: 'bianca s silva',
  email: 'biasivabsi11@gmail.com',
  cpf: '404.683.700-48',
  phone_number: '213123123123',
  country: '',
  address1: 'rUA mAASDASDASDASDSAD',
  address2: 'ADSASDADASDASD',
  number: '213123123123',
  zip: '68734420',
  district: 'CAIÇARA',
  city: 'CASTANHAL',
  state: '',
}

export const validationSchema = Yup.object({
  phone_number: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('common.custom_field.phone'),
    })
  ),
  full_name: Yup.string().required(
    i18n.t('page.checkout.card_info.mistakes.full_name_required')
  ),
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
