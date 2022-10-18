import { Flex, Spinner } from '@chakra-ui/react'
import { Button, CustomForm, Text } from 'components'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores/theme'
import { colors, fonts, sizes } from 'styles'
import { getMaxmindLocation } from 'utils/location'
import { RegistrationProps } from './types'

const CustomFieldsForm = ({
  handleFormSubmit,
  isLoading,
  fields: customfields,
}: RegistrationProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const itsNotBrazil = (value) => value.name !== 'rg' && value.name !== 'cpf'
  const [fields, setfields] = useState(customfields)
  const [loading, setloading] = useState(true)

  const getLocation = async () => {
    setloading(true)
    try {
      const {
        country: { iso_code },
      } = await getMaxmindLocation()
      if (iso_code !== 'BR') {
        setfields(fields.filter(itsNotBrazil))
      }
    } catch (e) {
      console.error(e)
    } finally {
      setloading(false)
    }
  }

  useEffect(() => {
    getLocation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Flex alignItems={'center'} flexDirection={'column'} gridGap={2}>
      <Text
        fontSize={24}
        textAlign={'center'}
        fontFamily={fonts.medium}
        color={colors.generalText[colorMode]}
      >
        {t('signup.custom_fields.title')}
      </Text>
      <Text
        fontSize={16}
        paddingTop={10}
        textAlign={'center'}
        color={colors.secondaryText[colorMode]}
        marginBottom={4}
      >
        {t('signup.custom_fields.subtitle')}
      </Text>
      {
        !loading && (
          <CustomForm
            fields={fields}
            button={({ dirty, isValid, handleSubmit }) => (
              <Button
                width={[sizes.loginButtonWidth]}
                marginTop={10}
                isDisabled={!(dirty && isValid)}
                label={t('common.next')}
                onClick={handleSubmit}
                isLoading={isLoading}
              />
            )}
            handleFormSubmit={(data) => {
              handleFormSubmit(data)
            }}
          />
        )
      }
      {
        loading && (
          <Spinner
            speed="0.65s"
            thickness={'3px'}
            size={'xl'}
            color={colors.secondaryText[colorMode]}
          />
        )
      }
    </Flex>
  )
}

export { CustomFieldsForm }

