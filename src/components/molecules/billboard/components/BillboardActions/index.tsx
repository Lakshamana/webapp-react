import React from 'react'
import { Button } from 'components'
import { BillboardItemActions } from '../../types'
import { Actions, ContentButton } from './style'

const ActionsList = ({ actions }: { actions: BillboardItemActions[] }) => {
  return (
    <Actions>
      {actions?.map((actions: BillboardItemActions, i: number) => (
        <ContentButton>
          <Button
						width={'100%'}
						height={'100%'}
            key={`Button-${i}`}
            backgroundColor={actions.bgColor}
            borderColor={actions.borderColor}
            iconName={actions.icon}
            color={actions.textColor}
            type="billboard"
            label={actions.label}
          />
        </ContentButton>
      ))}
    </Actions>
  )
}
export { ActionsList }
