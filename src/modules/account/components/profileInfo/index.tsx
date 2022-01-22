import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { Flex } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { useAuthStore } from 'services/stores'

import { pxToRem } from 'styles/metrics'

import { useThemeStore } from 'services/stores/theme'
import { Text, Button, Avatar } from 'components'
import { colors } from 'styles'
import { Label } from '../../styles'

import { initialValues } from './settings'
import { ProfileData } from './types'

const ProfileInfo = ({ updateProfile, isLoading }: ProfileData) => {
  const [isEditing, setIsEditing] = useState(false)
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { user } = useAuthStore()

  const { values, handleSubmit, handleChange, setValues } = useFormik({
    initialValues: {
      ...initialValues,
    },
    onSubmit: async () => {
      updateProfile({ ...values })
    },
  })

  const setInitialValues = () => {
    setValues({
      address: user?.address || '',
      birthday: user?.birthday || null,
      phone: user?.phone || '',
    })
  }

  const renderInputByType = (key: string, value: any) => {
    switch (key) {
      // case 'birthday':
      //   return (
      //     <DateInput
      //       startValue={new Date(value)}
      //       onChange={(value) => setFieldValue(key, value)}
      //     ></DateInput>
      //   )
      default:
        return (
          <Input
            onChange={handleChange}
            width={'100%'}
            variant="flushed"
            name={`${key}`}
            value={value}
          />
        )
    }
  }

  useEffect(() => {
    setIsEditing(false)
  }, [user])

  useEffect(() => {
    setInitialValues()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Flex width={'100%'} alignItems="left" direction="column">
        <Flex justifyContent="center" pb={5}>
          <Avatar size="xl" src={user?.avatar_url || ''}></Avatar>
        </Flex>
        {Object.keys(values).map((key) => {
          return (
            <Text key={key} color={colors.secondaryText[colorMode]} py={'10px'}>
              <Label fontSize={pxToRem(16)} fontWeight="500">
                {t(`page.account.${key}`)}:
              </Label>
              {!isEditing ? values[key] : renderInputByType(key, values[key])}
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

export { ProfileInfo }
