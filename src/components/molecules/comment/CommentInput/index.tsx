import { useEffect } from 'react'
import { InputGroup, InputRightElement, Flex, Spinner, Box } from '@chakra-ui/react'
import { useAuthStore, useThemeStore } from 'services/stores'
import { useFormik } from 'formik'
import { Avatar } from 'components'
import { initialValues, validationSchema } from './settings'
import { IconCustom } from './style'
import { colors } from 'styles'
import { Props, Payload } from './types'
import { InputDefault } from './components/InputDefault'
import { InputEdit } from './components/InputEdit'

const CommentInput = ({
  postId,
  parentId,
  editText,
  action,
  actionLoading,
  cancelAction,
  totalComments,
  setTotalComments
}: Props) => {
  const { colorMode } = useThemeStore()
  const { user, account } = useAuthStore()

  useEffect(() => {
    if (editText) formik.setFieldValue('description', editText)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editText])

  const onSubmit = async ({ description }: Payload) => {
    const variables = {
      payload: { description }
    }

    if (editText) {
      variables['id'] = postId
    } else {
      variables.payload['content'] = postId
      variables.payload['parent'] = parentId
    }

    try {
      await action({ variables })
      if (totalComments) {
        setTotalComments(totalComments + 1)
      }
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
    <Flex alignItems="center">
      {
        !editText &&
        <Avatar
          mr={3}
          width={'40px'}
          height={'40px'}
          src={user?.avatar_url || ''}
          name={account?.username || ''}
        />
      }
      <InputGroup size="lg" display="flex" alignItems="center" my={5}>
        {
          editText
            ? <InputEdit
              value={formik.values.description}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              onSubmit={formik.handleSubmit}
            />
            : <InputDefault
              value={formik.values.description}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              onSubmit={formik.handleSubmit}
            />
        }
        <InputRightElement top={-1}>
          {
            actionLoading &&
            <Spinner
              speed="0.65s"
              thickness={'3px'}
              size={'md'}
              color={colors.secondaryText[colorMode]}
            />
          }
          {
            !actionLoading &&
            <Flex alignItems="center">
              <IconCustom
                icon="mdi:send"
                color={colors.brand.primary[colorMode]}
                onClick={formik.handleSubmit}
              />
              {
                cancelAction &&
                <Box ml={3} mr={6}>
                  <IconCustom
                    icon="ic:sharp-cancel"
                    color={colors.inputBg[colorMode]}
                    onClick={cancelAction}
                  />
                </Box>
              }
            </Flex>
          }
        </InputRightElement>
      </InputGroup>
    </Flex>
  )
}

export { CommentInput }
