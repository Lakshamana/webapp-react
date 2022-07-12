export type Props = {
  plan: any
  nextStep: () => void
}

export enum OrderType {
  pending = 'PENDING',
  active = 'ACTIVE',
  failed = 'FAILED',
}