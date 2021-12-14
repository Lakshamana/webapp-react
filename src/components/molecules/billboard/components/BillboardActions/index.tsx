import { Button } from 'components'
import { BillboardItemActions } from '../../types'
import { Actions, ContentButton } from './style'

const ActionsList = ({ actions }: { actions: BillboardItemActions[] }) => {
  return (
    <Actions>
      {actions?.map((action: BillboardItemActions) => (
        <ContentButton key={`billboard-action-${action.id}`}>
          <Button
						width={'100%'}
						height={'100%'}
            backgroundColor={action.bgColor}
            borderColor={action.borderColor}
            iconName={action.icon}
            color={action.textColor}
            variant={'unstyled'}
            label={action.label}
            borderRadius={'6px'}
          />
        </ContentButton>
      ))}
    </Actions>
  )
}
export { ActionsList }
