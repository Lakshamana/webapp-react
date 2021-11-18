import * as Yup from 'yup'
import i18n from 'config/i18n'
import { PaymentMethodType } from './types'

export const ACCOUNT_INFO = [
  {
    label: 'Your Name',
    id: 'name',
    value: 'Humberto Faria',
    onClick: () => {},
  },
  { label: 'Username', id: 'username', value: '1berto', onClick: () => {} },
  { label: 'Email', id: 'email', value: '1berto@gmail.com', onClick: () => {} },
  { label: 'Password', value: '*****', id: 'password' },
  {
    label: 'Phone',
    id: 'phone',
    value: '12345677890',
    format: () => '(12 ) 3456 77890',
    onClick: () => {},
  },
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
}

export const validationSchema = Yup.object().shape({})
