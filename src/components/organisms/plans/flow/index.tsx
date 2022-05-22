import { Steps, Plan } from "../types"
import { useState } from "react"
import { SelectPlan } from "../select"
import { SelectOption } from "components/organisms/plans/options";

export const PlanSelectFlow = ({ entitlement }: { entitlement: any[] | undefined}) => {
  const plans = [
    {
      imageUrl:
        'https://bitcoinist.com/wp-content/uploads/2021/09/dogecoi.jpeg',
      imageAlt: 'Rear view of modern home with pool',
      title: 'Platinum - Subscription Title',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ate incididunt ut labore et.',
      value: 199,
    },
    {
      imageUrl:
        'https://usethebitcoin.com/wp-content/uploads/2019/08/How-to-sell-Ethereum-728x454.jpg',
      imageAlt: 'Rear view of modern home with pool',
      title: 'Gold - Subscription Title',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ate incididunt ut labore et.',
      value: 165,
    },
    {
      imageUrl:
        'https://timnews.com.br/system/images/photos/14737039/original/open-uri20211021-19-1xss92r?1634827953',
      imageAlt: 'Rear view of modern home with pool',
      title: 'Silver - Subscription Title',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ate incididunt ut labore et.',
      value: 85,
    },
  ]
  const [currentState, setcurrentState] = useState(Steps.SELECT_PLAN);
  const [selectedPlan, setselectedPlan] = useState<Plan>(plans[0])
  const nextStep = () => setcurrentState(currentState + 1)

  if(currentState === Steps.SELECT_PLAN){
    return (
      <SelectPlan plans={plans} selectPlan={setselectedPlan} nextStep={nextStep}/>
    )
  }
  if(currentState === Steps.SELECT_OPTION){
    return (
      <SelectOption plan={selectedPlan} nextStep={nextStep}/>
    )
  }
  return <div></div>
}