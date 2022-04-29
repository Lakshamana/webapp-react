import { Button } from 'components'
import { useHistory } from 'react-router-dom'
import { BillboardItemActions } from '../../types'
import { Actions, ContentButton } from './style'

const ActionsList = ({ actions }: { actions: BillboardItemActions[] }) => {
  const history = useHistory()

  const redirectTo = (route) => {
    if (!route) return

    if (route.indexOf('http') === 0) {
      window?.open(route, '_blank')?.focus()
      return
    }

    history.push(route)
  }

  return (
    <Actions>
      {actions?.map((action: BillboardItemActions) => {
        return (
          <ContentButton key={`${action.label}-${action.route}`}>
            <Button
              width="auto"
              size='lg'
              backgroundColor={action.bgColor}
              borderColor={action.borderColor}
              iconName={action.icon}
              color={action.textColor}
              variant={'unstyled'}
              label={action.label}
              onClick={() => redirectTo(action?.route)}
            />
          </ContentButton>
        )
      })}
    </Actions>
  )
}
export { ActionsList }
