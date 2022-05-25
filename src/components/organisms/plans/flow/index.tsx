import { Steps } from "../types"
import { useState } from "react"
import { SelectPlan } from "../select"
import { SelectOption } from "components/organisms/plans/options";
import { Props } from "./types";

export const PlanSelectFlow = ({
    entitlement,
    refetch,
  }: Props) => {
  const [currentState, setcurrentState] = useState(Steps.SELECT_PLAN);
  const [selectedPlan, setselectedPlan] = useState()
  const nextStep = () => setcurrentState(currentState + 1)

  if(currentState === Steps.SELECT_PLAN){
    return (
      <SelectPlan plans={entitlement} selectPlan={setselectedPlan} nextStep={nextStep}/>
    )
  }
  if(currentState === Steps.SELECT_OPTION){
    return (
      <SelectOption plan={selectedPlan} nextStep={nextStep} refetch={refetch}/>
    )
  }
  return <div></div>
}