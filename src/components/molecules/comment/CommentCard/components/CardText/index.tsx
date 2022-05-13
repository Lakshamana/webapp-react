import { useEffect, useState } from 'react'
import { colors } from 'styles'
import { pxToRem } from 'styles/metrics'
import { useThemeStore } from 'services/stores'
import { Text, CommentInput } from 'components'
import { IProps } from './types'

const CardText = ({ description, editInput, setEditInput, action, loading }: IProps) => {
  const { colorMode } = useThemeStore()
  const [comment, setComment] = useState<string>('')

  useEffect(() => setComment(description), [description])

  const handleCancel = () => setEditInput(null)
  const handleUpdate = (values) => {
    action(values)
    setEditInput(null)
  }

  if (editInput) {
    return (
      <CommentInput
        postId={editInput.id}
        editText={comment}
        action={handleUpdate}
        actionLoading={loading}
        cancelAction={handleCancel}
      />
    )
  }

  return (
    <Text
      color={colors.generalText[colorMode]}
      fontSize={pxToRem(16)}
    >
      {description}
    </Text>
  )
}

export { CardText }