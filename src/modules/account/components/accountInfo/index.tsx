import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { useThemeStore } from 'services/stores/theme'

import { Flex } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Text } from 'components'

import { colors } from 'styles'
import { Label } from '../../styles'
import { pxToRem } from 'styles/metrics'

import { UpdateButtons } from '../updateButtons'
import { AccountData } from './types'

const AccountInfo = ({ updateAccount, isLoading, account }: AccountData) => {
  const [isEditing, setIsEditing] = useState(false)
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()

  const { values, handleSubmit, handleChange, resetForm } = useFormik({
    initialValues: {
      username: account.username || '',
      display_name: account.display_name || '',
      first_name: account.first_name || '',
      last_name: account.last_name || '',
    },
    onSubmit: async () => {
      updateAccount({ ...values })
    },
  })

  useEffect(() => {
    setIsEditing(false)
  }, [account])

  return (
    <>
      <Flex width={'100%'} alignItems="left" direction="column">
        <Text color={colors.secondaryText[colorMode]} py={'10px'}>
          <Label fontSize={pxToRem(16)} fontWeight="500">
            {t(`page.account.email`)}:
          </Label>
          {account.email}
        </Text>

        {Object.keys(values).map((key) => {
          return (
            <Text key={key} color={colors.secondaryText[colorMode]} py={'10px'}>
              <Label fontSize={pxToRem(16)} fontWeight="500">
                {t(`page.account.${key}`)}:
              </Label>
              {isEditing ? (
                <Input
                  onChange={handleChange}
                  width={'100%'}
                  variant="flushed"
                  name={`${key}`}
                  value={values[key]}
                />
              ) : (
                values[key]
              )}
            </Text>
          )
        })}
      </Flex>
      <UpdateButtons
        editFormActive={isEditing}
        isLoadingAction={isLoading}
        handleIsEditing={(value) => setIsEditing(value)}
        handleSubmit={handleSubmit}
        resetValues={resetForm}
      ></UpdateButtons>
    </>
  )
}

export { AccountInfo }
