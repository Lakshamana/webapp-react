import { Plan } from "../types"

export type Props = {
  plans: any[] | undefined
  selectPlan: (value: Plan) => void
  nextStep: () => void
}