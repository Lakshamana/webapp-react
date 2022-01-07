import { Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores/theme'
import { Button, Form, Text } from 'components'

import { RegistrationProps } from './types'
import { colors, fonts, sizes } from 'styles'

const CustomFieldsForm = ({
  handleFormSubmit,
  isLoading,
  fields
}: RegistrationProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()

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

      <Form
        fields={fields}
        button={({ dirty, isValid, handleSubmit }) => 
          <Button
            width={[sizes.loginButtonWidth]}
            marginTop={10}
            isDisabled={!(dirty && isValid)}
            label={'Next'}
            onClick={handleSubmit}
            isLoading={isLoading}
          ></Button>
        }
        handleFormSubmit={(data) => {
          console.log('data', data)

          handleFormSubmit(data)
        }}
      />
    </Flex>
  )
}

export { CustomFieldsForm }
