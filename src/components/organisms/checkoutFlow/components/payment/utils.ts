import { PaymentMethods, PaymentType } from '../../types'

export const paymentTypes = (type: PaymentType) => {
  if (type === 'Bexs') {
    return [
      {
        type: PaymentMethods.CREDIT_CARD,
        icon: 'bi:credit-card-2-back',
        label: 'Credit Card',
      },
      {
        type: PaymentMethods.BOLETO,
        icon: 'clarity:bar-code-line',
        label: 'Boleto',
      },
      {
        type: PaymentMethods.PIX,
        icon: 'ic:outline-pix',
        label: 'Pix',
      },
    ]
  } else {
    return [
      {
        type: PaymentMethods.CREDIT_CARD,
        icon: 'bi:credit-card-2-back',
        label: 'Credit Card',
      },
    ]
  }
}
