import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FormikHelpers, useFormik } from 'formik'
import { useThemeStore } from 'services/stores/theme'

import { Flex } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Text } from 'components'

import { colors } from 'styles'
import { Label } from '../../styles'
import { pxToRem } from 'styles/metrics'

import { UpdateButtons } from '../updateButtons'
import { AccountData } from './types'
import * as Yup from 'yup'
import { LabelError } from './styles'
import { PasswordConfirmation } from '../passwordValidation'
import { useDisclosure } from '@chakra-ui/react'
import { MUTATION_VERIFY_MAIL } from 'services/graphql'
import { useMutation } from '@apollo/client'

const AccountInfo = ({ updateAccount, isLoading, account }: AccountData) => {
  const [isEditing, setIsEditing] = useState(false)
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [verifyMail] = useMutation(MUTATION_VERIFY_MAIL)

  const emailUpdateFlow = async(values: any, actions: FormikHelpers<any>) => {

    await verifyMail({variables: {payload: { email: values.email }}})
    .then(()=>{
      actions.setFieldError('email', t('signup.error.email_exists'))
    })
    .catch( async ()=>{
      onOpen()
    })

  }

  const { values, errors, touched, handleSubmit, handleChange, resetForm } =
    useFormik({
      initialValues: {
        email: account.email || '',
        username: account.username || '',
        display_name: account.display_name || '',
        first_name: account.first_name || '',
        last_name: account.last_name || '',
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .required(
            t('common.error.field_required', {
              field_name: t('signup.label.email'),
            })
          )
          .email(t('common.error.valid_email')),
      }),
      onSubmit: async (values, actions) => {
        if(values.email === account.email) {
          updateAccount({ ...values})
          return null
        }
        emailUpdateFlow(values, actions)
      },
    })

  useEffect(() => {
    setIsEditing(false)
  }, [account])

  return (
    <>
      <Flex width={'100%'} pt={2} alignItems="left" direction="column">
        {Object.keys(values).map((key) => (
          <Text key={key} color={colors.secondaryText[colorMode]} py={'10px'}>
            <Label fontSize={pxToRem(16)} fontWeight="500">
              {t(`page.account.${key}`)}:
            </Label>
            {isEditing ? (
                <>
                <Input
                  onChange={handleChange}
                  width={'100%'}
                  variant="flushed"
                  name={key}
                  value={values[key]}
                  isInvalid={errors[key] && touched[key]}
                />
                { errors[key] && <LabelError>{errors[key]}</LabelError> }
              </>
            ) : (
              values[key]
            )}
          </Text>
        ))}
      </Flex>
      <UpdateButtons
        editFormActive={isEditing}
        isLoadingAction={isLoading}
        handleIsEditing={(value) => setIsEditing(value)}
        handleSubmit={handleSubmit}
        resetValues={resetForm}
      ></UpdateButtons>
      <PasswordConfirmation updatedValues={values} isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export { AccountInfo }
