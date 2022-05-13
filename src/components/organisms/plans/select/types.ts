import { Plan } from "../types"

export type Props = {
  plans: Plan[]
  selectPlan: (value: Plan) => void
  nextStep: () => void
}