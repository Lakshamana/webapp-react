import { ColorMode } from 'types/common'
import { Product, ProductPrice } from 'types/products'

export enum Steps {
  SELECT_PRODUCT,
  SELECT_PRICE,
  PAYMENT,
  SUCCESS,
  UNPAID,
  FAILED,
}

export interface CheckoutFlowProps {
  products: Product[]
  accessGranted?: () => void
  cancel?: () => void
}

export interface SelectProductProps extends CustomColors {
  products: Product[]
  setSelectedProduct: (product: Product) => void
}

export interface SelectPriceProps extends CustomColors {
  productPrices?: ProductPrice[]
  handleSelectPrice: (price: ProductPrice) => void
}

export interface PaymentProps extends CustomColors {
  selectedPrice?: ProductPrice
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

interface CustomColors {
  colorMode: ColorMode
}

export type PaymentType = 'Stripe' | 'Bexs'
