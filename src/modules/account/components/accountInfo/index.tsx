import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { useThemeStore } from 'services/stores/theme'
import { Flex, Box } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Text, Button } from 'components'
import { useAuthStore } from 'services/stores'
import { colors } from 'styles'
import { Label } from '../../styles'
import { AccountData } from './types'
import { pxToRem } from 'styles/metrics'
import { useEffect } from 'react'
import { initialValues } from './settings'

const AccountInfo = ({ updateAccount, isLoading }: AccountData) => {
  const [isEditing, setIsEditing] = useState(false)
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { account } = useAuthStore()

  const { values, handleSubmit, handleChange, setValues } = useFormik({
    initialValues: {
      ...initialValues,
    },
    onSubmit: async () => {
      updateAccount({ ...values })
    },
  })

  const setInitialValues = () => {
    setValues({
      username: account?.username || '',
      first_name: account?.first_name || '',
      last_name: account?.last_name || '',
      display_name: account?.display_name || '',
    })
  }

  useEffect(() => {
    setIsEditing(false)
  }, [account])

  useEffect(() => {
    setInitialValues()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Flex width={'100%'} alignItems="left" direction="column">
        <Text
          color={colors.secondaryText[colorMode]}
          py={'10px'}
        >
          <Label fontSize={pxToRem(16)} fontWeight="500">
            {t(`page.account.email`)}:
          </Label>
          {account?.email || ''}
        </Text>

        {Object.keys(values).map((key) => {
          return (
            <Text
              key={key}
              color={colors.secondaryText[colorMode]}
              py={'10px'}
            >
              <Label fontSize={pxToRem(16)} fontWeight="500">
                {t(`page.account.${key}`)}:
              </Label>
              {!isEditing ? (
                values[key]
              ) : (
                <Input
                  onChange={handleChange}
                  width={'100%'}
                  variant="flushed"
                  name={`${key}`}
                  value={values[key]}
                />
              )}
            </Text>
          )
        })}
      </Flex>
      <Flex alignItems="center" justifyContent="end" mt={10}>
        {!isEditing ? (
          <Button
            size="sm"
            width={'auto'}
            variant="link"
            label="Update"
            onClick={() => setIsEditing(true)}
          ></Button>
        ) : (
          <>
            <Button
              size="sm"
              mr={5}
              iconName={'content-save'}
              width={'auto'}
              variant="link"
              isLoading={isLoading}
              label={t('common.save')}
              onClick={() => handleSubmit()}
            ></Button>
            <Button
              size="sm"
              width={'auto'}
              variant="link"
              label={t('common.cancel')}
              onClick={() => {
                setIsEditing(false)
                setInitialValues()
              }}
            ></Button>
          </>
        )}
      </Flex>
    </>
  )
}

export { AccountInfo }
