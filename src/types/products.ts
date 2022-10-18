export interface Product {
  id: string
  name: string
  description: string
  statementDescriptor: string
  unitLabel: string
  imageUrl: string
  productPrices: ProductPrice[]
  isActive: boolean
  setupFee: null
  metadata: null
  createdDate: Date
  updatedDate: Date
  linkUrl: string
}

export interface ProductPrice {
  id: string
  createdDate: Date
  productsId: string
  unitPrice: number
  installments: null
  packageUnits: null
  internalDescription: string
  recurringTrialPeriodDays: null
  isIncludingCountries: boolean
  pricingModelId: string
  billingTypesId: string
  recurringUsageTypesId: string
  recurringUsageTypes: Types
  billingPeriodId: null | string
  recurringMeteredUsageId: null | string
  currencyMonthlyId: null
  everyTime: null
  currencyId: string
  priceTiers: any[]
  billingPeriods: BillingPeriods | null
  currency: Currency
  numberActiveSubscriptions: number
  isActive: boolean
  billingTypes: BillingTypes
  onlyProductPrice: boolean
  neverUsedSubscription: boolean
}

export interface BillingTypes {
  id: string
  name: BillingType
}

export interface BillingPeriods {
  id: string
  name: string
  recurringIntervalsId: string
  intervalCount: number
}

export interface Types {
  id: string
  name: string
}

export interface Currency {
  symbol: string
  isoCode: string
  name: string
}

export type BillingType = 'One time' | 'Recurring'
