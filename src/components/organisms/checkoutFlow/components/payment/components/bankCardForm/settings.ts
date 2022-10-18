import i18n from 'config/i18n'
import * as Yup from 'yup'

export const initialValues = {
  full_name: 'bianca s silva',
  month: '02',
  year: '2024',
  email: 'biasivabsi11@gmail.com',
  cpf: '00015262197',
  country: '',
  address1: 'rUA mAASDASDASDASDSAD',
  address2: 'ADSASDADASDASD',
  number: '20',
  zip: '68734420',
  district: 'CAIÇARA',
  city: 'CASTANHAL',
  state: '',
  terms: true,
  phone_number: '213123123123',
}

export const bexValidationSchema = Yup.object().shape({
  phone_number: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('common.custom_field.phone'),
    })
  ),
  full_name: Yup.string().required(
    i18n.t('page.checkout.card_info.mistakes.full_name_required')
  ),
  month: Yup.string().required(
    i18n.t('page.checkout.card_info.mistakes.month_required')
  ),
  year: Yup.string().required(
    i18n.t('page.checkout.card_info.mistakes.year_required')
  ),
  cpf: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('page.checkout.card_info.CPF'),
    })
  ),
  country: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('page.checkout.card_info.country'),
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
  address2: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('page.checkout.card_info.address02'),
    })
  ),
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
  terms: Yup.bool().oneOf(
    [true],
    i18n.t('common.error.accept_terms_and_conditions')
  ),
})

export const stripeValidationSchema = Yup.object().shape({
  phone_number: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('common.custom_field.phone'),
    })
  ),
  full_name: Yup.string().required(
    i18n.t('page.checkout.card_info.mistakes.full_name_required')
  ),
  month: Yup.string().required(
    i18n.t('page.checkout.card_info.mistakes.month_required')
  ),
  year: Yup.string().required(
    i18n.t('page.checkout.card_info.mistakes.year_required')
  ),

  country: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('page.checkout.card_info.country'),
    })
  ),
  address1: Yup.string().required(
    i18n.t('common.error.field_required', {
      field_name: i18n.t('page.checkout.card_info.address01'),
    })
  ),
  terms: Yup.bool().oneOf(
    [true],
    i18n.t('common.error.accept_terms_and_conditions')
  ),
})
