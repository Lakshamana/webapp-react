import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { useDisclosure } from '@chakra-ui/hooks'
import { Flex } from '@chakra-ui/layout'
import { useThemeStore } from 'services/stores'
import { SingleConfiguration } from '..'
import { Button, Modal, Input, Text } from 'components'
import { initialValues, validationSchema } from './settings'
import { sizes, colors } from 'styles'
import { Box } from '@chakra-ui/react'
import { useMutation } from '@apollo/client'
import { MUTATION_UPDATE_ACCOUNT } from 'services/graphql'

export const UpdateEmail = () => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [updateEmailOnly, { loading: loadingUpdateEmail }] = useMutation(MUTATION_UPDATE_ACCOUNT)

  const {
    values,
    handleSubmit,
    handleChange,
    resetForm,
    handleBlur,
    dirty,
    isValid,
    errors,
    touched,
    setFieldError,
  } = useFormik({
    initialValues: {
      ...initialValues,
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: async () => {
      const { newEmail: email } = values
      updateEmailOnly({
        variables: {
          payload: {
            email,
          },
        },
      })
      .then(()=>{
        onClose()
        resetForm()
      })
      .catch(({ message })=>{
        setFieldError(
          'newEmail',
          message
        )
      })
    },
  })
  return (
    <>
      <SingleConfiguration
        text={t('page.account.email')}
        children={
          <Button
            size="sm"
            width="auto"
            variant="link"
            onClick={onOpen}
            label={t('page.account.update_email')}
          ></Button>
        }
        {...{ colorMode }}
      />
      <Modal
        size="lg"
        isCentered
        closeButton={false}
        isOpen={isOpen}
        onClose={onClose}
        defaultActions={false}
        actionLabel={t('page.account.update')}
        onConfirm={handleSubmit}
      >
        <Flex flexDirection="column" gridGap={2} alignItems={'center'}>
          <Text
            mb={3}
            fontSize={'1.5rem'}
            color={colors.generalText[colorMode]}
          >
            {t('page.account.update_email')}
          </Text>
          <Input
            type="text"
            name="newEmail"
            value={values.newEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.newEmail}
            error={!!errors.newEmail && touched.newEmail}
            placeholder={t('page.account.new_email')}
          />
          <Input
            type="text"
            name="newEmailConfirmation"
            value={values.newEmailConfirmation}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.newEmailConfirmation}
            error={
              !!errors.newEmailConfirmation &&
              touched.newEmailConfirmation
            }
            placeholder={t('page.account.confirm_new_email')}
          />
          <Input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.password}
            error={!!errors.password && touched.password}
            placeholder={t('page.account.password')}
          />
          <Box mt={4} display="flex" flexDirection="column" alignItems="center">
            <Button
              width={sizes.loginButtonWidth}
              label={t('page.account.update')}
              onClick={() => handleSubmit()}
              isDisabled={!(dirty && isValid)}
              isLoading={loadingUpdateEmail}
            />
            <Button
              width={sizes.loginButtonWidth}
              marginTop={2}
              variant={'ghost'}
              label={t('common.cancel')}
              onClick={() => {
                resetForm()
                onClose()
              }}
            />
          </Box>
        </Flex>
      </Modal>
    </>
  )
}
