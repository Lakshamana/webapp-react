import { ColorMode } from 'types/common'
import { Product, ProductPrice } from 'types/products'

export enum Steps {
  SELECT_PRODUCT,
  PERSONAL_INFORMATION,
  CHOOSE_PAYMENT_TYPE,
  PAYMENT,
  SUCCESS,
  UNPAID,
  FAILED,
}

export interface PersonalInfo {
  fullName: string
  email: string
  phoneNumber?: string
}

export interface CheckoutFlowProps {
  products?: Product[]
  simplified?: boolean
  accessGranted?: () => void
  cancel?: () => void
}

export interface SelectProductProps extends CustomColors {
  products?: Product[]
  handleSelectPrice: (price: ProductPrice) => void
}

export interface SelectPriceProps extends CustomColors {
  productPrices?: ProductPrice[]
  handleSelectPrice: (price: ProductPrice) => void
}

export interface PaymentProps extends CustomColors {
  selectedPrice?: ProductPrice
  selectedProduct?: Product
  qrCode?: string
  boletoUrl?: string
  setCurrentStep: (step: number) => void
  sendConfirmOrderPayload: (payload) => void
  isLoadingOrder: boolean
  paymentType: PaymentType
}

export enum OrderType {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  FAILED = 'FAILED',
  UNPAID = 'UNPAID',
}

export enum PaymentMethods {
  CREDIT_CARD = 'CREDITE_CARD',
  BOLETO = 'BOLETO',
  PIX = 'PIX',
}

interface CustomColors {
  colorMode: ColorMode
}

export type PaymentType = 'Stripe' | 'Bexs'

export type BillingInformationBexs = {
  address1: string
  address2: string
  streetNumber: string
  zip: string
  district: string
  countryId: string
  city: string
  stateId: string
  neighborhood: string
  cpf: string
}

export type BillingInformationStripe = {
  address1: string
  countryId: string
}
