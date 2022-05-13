export enum Steps {
  SELECT_PLAN,
  SELECT_OPTION,
  SELECT_PAYMENT
}

export type Plan = {
  imageUrl: string
  imageAlt: string
  title: string
  subtitle: string
  value: number,
}