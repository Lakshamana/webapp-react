import { useTranslation } from 'react-i18next'
import { InputGroup, InputRightElement, Flex, Spinner } from '@chakra-ui/react'
import { useAuthStore, useThemeStore } from 'services/stores'
import { useFormik } from 'formik'
import { Avatar } from 'components'
import { initialValues, validationSchema } from './settings'
import { InputCustom, IconCustom } from './style'
import { colors } from 'styles'
import { Props, Payload } from './types'

const CommentForm = ({
  postId,
  addComment,
  addCommentLoading,
  totalComments,
  setTotalComments
}: Props) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { user, account } = useAuthStore()

  const onSubmit = async ({ description }: Payload) => {
    const variables = {
      payload: {
        description,
        content: postId
      }
    }
    try {
      await addComment({ variables })
      setTotalComments(totalComments + 1)
      formik.resetForm()
    }
    catch (error) { }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  return (
    <Flex alignItems="center" mb={'53px'}>
      <Avatar
        mr={3}
        width={'40px'}
        height={'40px'}
        src={user?.avatar_url || ''}
        name={account?.username || ''}
      />
      <InputGroup size="lg" display="flex" alignItems="center" my={5}>
        <InputCustom
          type="text"
          focusBorderColor="none"
          placeholder={t('page.post.add_a_comment')}
          name="description"
          value={formik.values.description}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          onKeyDown={(e: any) => e.keyCode === 13 && formik.handleSubmit()}
          {...formik}
        />
        <InputRightElement>
          {
            addCommentLoading
              ? <Spinner
                speed="0.65s"
                thickness={'3px'}
                size={'md'}
                color={colors.secondaryText[colorMode]}
              />
              : <IconCustom
                icon="mdi:send"
                onClick={formik.handleSubmit}
              />
          }
        </InputRightElement>
      </InputGroup>
    </Flex>
  )
}

export { CommentForm }
