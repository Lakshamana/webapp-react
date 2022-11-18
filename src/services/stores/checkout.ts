import {
  BillingInformationBexs,
  BillingInformationStripe, PaymentType,
  PersonalInfo,
  Steps
} from 'components/organisms/checkoutFlow/types'
import { Product, ProductPrice } from 'types/products'
import create from 'zustand'

interface CheckoutState {
  selectedProduct: Product | null
  selectedPrice: ProductPrice | null
  personalInfo: PersonalInfo | null
  qrCode: string
  barCode: string
  currentStep: Steps
  newAccountId: string
  paymentType: PaymentType
  billingInformationBexs: BillingInformationBexs | null
  billingInformationStripe: BillingInformationStripe | null
  ccInformation: any
  setPaymentType: (paymentType: PaymentType) => void
  setSelectedProduct: (selectedProduct: Product) => void
  setSelectedPrice: (selectedPrice: ProductPrice) => void
  setPersonalInfo: (personalInfo: PersonalInfo) => void
  setCurrentStep: (currentStep: Steps) => void
  setQrCode: (qrCode: string) => void
  setBarCode: (barCode: string) => void
  setBillingInformationBexs: (billingInformationBexs: any) => void
  setBillingInformationStripe: (billingInformationStripe: any) => void
  setCcInformation: (ccInformation: any) => void
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  selectedProduct: null,
  selectedPrice: null,
  personalInfo: null,
  qrCode: '',
  barCode: '',
  currentStep: Steps.FAILED,
  newAccountId: '',
  paymentType: 'Bexs',
  billingInformationBexs: null,
  billingInformationStripe: null,
  ccInformation: {},
  setSelectedProduct: (selectedProduct: Product) => set({ selectedProduct }),
  setSelectedPrice: (selectedPrice: ProductPrice) => set({ selectedPrice }),
  setPersonalInfo: (personalInfo: PersonalInfo) => set({ personalInfo }),
  setCurrentStep: (currentStep: Steps) => set({ currentStep }),
  setQrCode: (qrCode: string) => set({ qrCode }),
  setBarCode: (barCode: string) => set({ barCode }),
  setPaymentType: (paymentType: PaymentType) => set({ paymentType }),
  setBillingInformationBexs: (billingInformationBexs: any) =>
    set({ billingInformationBexs }),
  setBillingInformationStripe: (billingInformationStripe: any) =>
    set({ billingInformationStripe }),
  setCcInformation: (ccInformation: any) => set({ ccInformation }),
}))
