import i18n from 'config/i18n'
import { Steps } from './types'

export const INSPIRE_PAYMENT_API = 'https://api-payment-staging.inspireplatform.io'
export const HEADERS = { headers: { tenant: 'Marvel-wu61z' } }

export const MONTHS = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
]

export const formatCurrency = (
  value: string | number,
  symbol: string = 'USD'
) => {
  if (typeof value === 'string') {
    value = parseFloat(value)
  }
  return Intl.NumberFormat(i18n.language, {
    style: 'currency',
    currency: symbol,
    minimumFractionDigits: 2,
  }).format(value)
}

export const PaymentSteps = [
  {
    label: 'Select Item',
    step: Steps.SELECT_PRODUCT,
    isCompleted: false
  },
  {
    label: 'Personal Information',
    step: Steps.PERSONAL_INFORMATION,
    isCompleted: false
  },
  {
    label: 'Payment',
    step: Steps.PAYMENT,
    isCompleted: false
  },
]