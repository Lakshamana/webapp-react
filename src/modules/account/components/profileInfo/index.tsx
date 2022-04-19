import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { format, parseISO } from 'date-fns'
import { ptBR, enUS } from 'date-fns/locale'

import { Flex, Box } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Avatar, DateInput } from 'components'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'

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

  const renderLabel = (key: string, value: any) => {
    switch (key) {
      case 'birthday':
        return format(parseISO(values[key]), 'P', {
          locale: locale === 'pt-BR' ? ptBR : enUS,
        })
      case 'phone':
        return (
          <PhoneInput
            disabled={true}
            enableSearch={true}
            country={'us'}
            value={value}
            inputStyle={{
              color: colors.secondaryText[colorMode],
              background: 'none',
              border: 'none',
              borderBottom: 'none',
              borderRadius: '0px',
              width: '100%',
              paddingTop: '0px',
              paddingBottom: '0px',
            }}
          />
        )
      default:
        return values[key]
    }
  }

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
      case 'phone':
        return (
          <PhoneInput
            enableSearch={true}
            country={'us'}
            value={value}
            onChange={(phone) => setFieldValue(key, phone)}
            inputStyle={{
              color: colors.secondaryText[colorMode],
              background: 'none',
              border: 'none',
              borderBottom: '1px solid',
              borderColor: colors.secondaryText[colorMode],
              borderRadius: '0px',
              width: '100%',
              paddingTop: '8px',
              paddingBottom: '7px',
            }}
          />
        )
      default:
        return (
          <Input
            onChange={handleChange}
            width="100%"
            variant="flushed"
            name={key}
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
            <Box
              color={colors.secondaryText[colorMode]}
              key={key}
              display="flex"
              py="10px"
              flexDirection={isEditing ? 'column' : 'row'}
            >
              <Label fontSize={pxToRem(16)} fontWeight="500">
                {t(`page.account.${key}`)}:
              </Label>
              { 
                isEditing ? 
                renderInputByType(key, values[key]) :
                renderLabel(key, values[key])
              }
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