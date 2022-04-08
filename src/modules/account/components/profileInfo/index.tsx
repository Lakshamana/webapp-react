import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { format, parseISO } from 'date-fns'
import { ptBR, enUS } from 'date-fns/locale'

import { Flex, Box } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Avatar, DateInput, Text } from 'components'

import { pxToRem } from 'styles/metrics'

import { useThemeStore } from 'services/stores/theme'

import { colors } from 'styles'
import { Label } from '../../styles'

import { UpdateButtons } from '../updateButtons'
import { ProfileData } from './types'

const ProfileInfo = ({
  updateProfile,
  isLoading,
  user,
  locale,
}: ProfileData) => {
  const [isEditing, setIsEditing] = useState(false)
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()

  const { values, handleSubmit, handleChange, setFieldValue, resetForm } =
    useFormik({
      initialValues: {
        address: user.address || '',
        birthday: user.birthday || '',
        phone: user.phone || '',
      },
      onSubmit: async () => {
        updateProfile({ ...values, locale: locale })
      },
    })

  const validateDate = (value) =>
    Date.parse(value) ? new Date(value) : new Date()

  const renderInputByType = (key: string, value: any) => {
    switch (key) {
      case 'birthday':
        return (
          <DateInput
            startValue={validateDate(value)}
            onChange={(date) => {
              setFieldValue(key, date)
            }}
          ></DateInput>
        )
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

  return (
    <>
      <Flex width={'100%'} alignItems="left" direction="column">
        <Flex justifyContent="center" py={5}>
          <Avatar size="xl" src={user?.avatar_url || ''}></Avatar>
        </Flex>
        {Object.keys(values).map((key) => {
          return (
            <Box color={colors.secondaryText[colorMode]} key={key}>
              <Text color={colors.secondaryText[colorMode]} py={'10px'}>
                <Label fontSize={pxToRem(16)} fontWeight="500">
                  {t(`page.account.${key}`)}:
                </Label>
                {isEditing ? 
                renderInputByType(key, values[key]) :
                  (key === 'birthday' && values[key]
                    ? format(parseISO(values[key]), 'P', {
                        locale: locale === 'pt-BR' ? ptBR : enUS,
                      })
                    : values[key])}
              </Text>
            </Box>
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

export { ProfileInfo }