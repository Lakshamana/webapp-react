import { useEffect } from 'react'
import { colors } from 'styles'
import { pxToRem } from 'styles/metrics'
import { useThemeStore } from 'services/stores'
import { Text, CommentInput } from 'components'
import { useMutation } from '@apollo/client'
import { MUTATION_UPDATE_COMMENT } from 'services/graphql'
import { IProps } from './types'

const CardText = ({ description, editInput, setEditInput }: IProps) => {
  const { colorMode } = useThemeStore()
  const [editComment, { data, loading }] = useMutation(MUTATION_UPDATE_COMMENT)
  const handleCancel = () => setEditInput(null)

  useEffect(() => {
    if (data?.updateComment) {
      setEditInput(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  if (editInput) {
    return (
      <CommentInput
        postId={editInput.id}
        editText={description}
        action={editComment}
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