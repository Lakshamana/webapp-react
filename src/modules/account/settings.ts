import * as Yup from 'yup'
import { PaymentMethodType } from './types'

export const ACCOUNT_INFO = [
  {
    id: 'name',
    onClick: () => {},
  },
  { id: 'username', onClick: () => {} },
  { id: 'email', onClick: () => {} },
  { value: '*****', id: 'password' },
  {
    id: 'phone',
    onClick: () => {},
  },
]

export const LANGUAGES = [
  { value: 'en-US', label: 'English' },
  { value: 'pt-BR', label: 'Português' },
]

export const PAYMENT_METHODS: Array<PaymentMethodType> = [
  {
    type: 'Mastercard',
    number: '**** **** **** 1234',
    id: '0',
  },
  {
    type: 'Mastercard',
    number: '**** **** **** 5678',
    id: '1',
  },
  {
    type: 'Mastercard',
    number: '**** **** **** 8901',
    id: '2',
  },
]

export const DEFAULT_USER = {
  name: 'Bia Silva',
  id: '11-user',
  avatar:
    'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg',
}

export const initialValues = {
  push: false,
  paymentMethod: '0',
  locale: 'en-US',
}

export const validationSchema = Yup.object().shape({})
