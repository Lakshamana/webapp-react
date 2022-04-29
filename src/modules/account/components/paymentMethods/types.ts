import { PaymentMethodType } from '../../types'

export interface PaymentMethodsProps {
  data: Array<PaymentMethodType>
  onDelete: any
  onUpdate: any
  onSelect: any
  strings: any
  selected: string
}
