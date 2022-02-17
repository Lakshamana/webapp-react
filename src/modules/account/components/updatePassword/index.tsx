import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { useDisclosure } from '@chakra-ui/hooks'
import { Flex } from '@chakra-ui/layout'
import { useThemeStore } from 'services/stores'
import { SingleConfiguration } from '..'
import { Button, Modal, Input, AlertComponent, Text } from 'components'
import { initialValues, validationSchema } from './settings'
import { sizes, colors } from 'styles'
import { Props } from './types'
import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'

const UpdatePassword = ({
  updatePassword,
  isLoading,
  alertMessageType,
  dispatchAlert,
}: Props) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (!isLoading) {
      onClose()
      resetForm()
    }
  }, [isLoading])

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
  } = useFormik({
    initialValues: {
      ...initialValues,
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: async () => {
      updatePassword({ ...values })
    },
  })
  return (
    <>
      {alertMessageType?.message && (
        <Box my={2}>
          <AlertComponent
            type={alertMessageType.type}
            description={alertMessageType.message}
            onClose={dispatchAlert}
          ></AlertComponent>
        </Box>
      )}
      <SingleConfiguration
        text={t('page.account.password')}
        children={
          <Button
            size="sm"
            width="auto"
            variant="link"
            onClick={onOpen}
            label={t('page.account.update_password')}
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
          <Text mb={3} fontSize={'1.5rem'} color={colors.generalText[colorMode]}>
            {t('page.account.update_password')}
          </Text>
          <Input
            type="password"
            name="currectPassword"
            value={values.currectPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.currectPassword}
            error={!!errors.currectPassword && touched.currectPassword}
            placeholder={t('page.account.current_password')}
          />
          <Input
            type="password"
            name="newPassword"
            value={values.newPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.newPassword}
            error={!!errors.newPassword && touched.newPassword}
            placeholder={t('page.account.new_password')}
          />
          <Input
            type="password"
            name="newPasswordConfirmation"
            value={values.newPasswordConfirmation}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.newPasswordConfirmation}
            error={
              !!errors.newPasswordConfirmation &&
              touched.newPasswordConfirmation
            }
            placeholder={t('page.account.confirm_new_password')}
          />
          <Box mt={4} display="flex" flexDirection="column" alignItems="center">
            <Button
              width={sizes.loginButtonWidth}
              label={t('page.account.update')}
              onClick={() => handleSubmit()}
              isDisabled={!(dirty && isValid)}
              isLoading={isLoading}
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
export { UpdatePassword }
