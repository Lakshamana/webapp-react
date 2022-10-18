export type cardForm = {
    full_name: string,
    email: string,
    cpf: string,
    address1: string,
    address2: string,
    number: string,
    zip: string,
    district: string,
    city: string,
    state: string,
    phone_number: string,
  }
  
  export interface Props {
    productPrice: string
    product: string
    sendConfirmOrderPayload: (payload) => void
    boletoUrl?: string
    isLoadingOrder: boolean
  }
  
  export enum OrderType {
    pending = 'PENDING',
    active = 'ACTIVE',
    failed = 'FAILED',
  }