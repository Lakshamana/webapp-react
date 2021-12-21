import { Box, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Button, Input, Checkbox } from 'components'
import { Props } from './types'
import { validationSchema } from './settings'
import { useFormik } from 'formik'
import { initialValues } from './settings'
import { sizes } from 'styles'

const SigninForm = ({ handleFormSubmit, isLoading }: Props) => {
  const { t } = useTranslation()

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    dirty,
    isValid,
    touched,
  } = useFormik({
    initialValues: {
      ...initialValues,
    },
    validationSchema,
    validateOnChange: true,
    onSubmit: async () => {
      handleFormSubmit({ ...values })
    },
  })

  return (
    <Flex
      alignItems={'center'}
      marginY={30}
      flexDirection={'column'}
      gridGap={3}
    >
      <Input
        name="payload.email"
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        value={values.payload.email}
        placeholder={t('signin.label.email')}
        errorMessage={errors.payload?.email}
        error={!!errors.payload?.email && touched.payload?.email}
      />
      <Input
        name="payload.password"
        type={'password'}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.payload.password}
        placeholder={t('signin.label.password')}
        errorMessage={errors.payload?.password}
        error={!!errors.payload?.password && touched.payload?.password}
      />
      <Box w="100%" py={2}>
        <Checkbox label={t('signin.label.save_as_default')}></Checkbox>
      </Box>
      <Button
        width={[sizes.loginButtonWidth]}
        mt={3}
        isDisabled={!(dirty && isValid)}
        label={t('signin.actions.login')}
        onClick={() => handleSubmit()}
        isLoading={isLoading}
      ></Button>
    </Flex>
  )
}

export { SigninForm }
