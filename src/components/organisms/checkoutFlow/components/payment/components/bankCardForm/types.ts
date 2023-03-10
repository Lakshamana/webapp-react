import { FlexProps } from '@chakra-ui/react'

export interface IBankCardForm {
  year: string
  month: string
  card_holder_name: string
  terms: boolean
}

export interface PmDataType {
  token: string
  created_at: Date
  updated_at: Date
  email?: any
  data?: any
  storage_state: string
  test: boolean
  metadata?: any
  callback_url?: any
  last_four_digits: string
  first_six_digits: string
  card_type: string
  first_name: string
  last_name: string
  month: number
  year: number
  address1?: any
  address2?: any
  city?: any
  state?: any
  zip?: any
  country?: any
  phone_number?: any
  company?: any
  card_holder_name: string
  eligible_for_card_updater: boolean
  shipping_address1?: any
  shipping_address2?: any
  shipping_city?: any
  shipping_state?: any
  shipping_zip?: any
  shipping_country?: any
  shipping_phone_number?: any
  issuer_identification_number: string
  payment_method_type: string
  errors: any[]
  fingerprint: string
  verification_value: string
  number: string
}

export interface PropsInputSpreedly extends FlexProps {
  error?: boolean
}

export interface SpreedlyError {
  allow_blank_name: string
  allow_expired_date: string
  cardType: string
  cvvLength: number
  luhnValid: boolean
  numberLength: number
  validCvv: boolean
  validNumber: boolean
}

export interface Props {
  sendConfirmOrderPayload: (payload) => void
}

export enum OrderType {
  pending = 'PENDING',
  active = 'ACTIVE',
  failed = 'FAILED',
}
