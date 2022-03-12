import { Flex, Grid, Text } from '@chakra-ui/react'
import { Button, Input, SelectInputStyle } from 'components'
import { STATE, GENDER } from './settings'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'

export const CheckoutCustomField = () => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const fullName = 'João Pedro Moraes'
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      px="1em"
    >
      <Text
        fontSize="32px"
        fontWeight="bold"
        textAlign="center"
        color={colors.generalText[colorMode]}
        mt="30px"
      >
        {t('page.checkout.more_info.title')}
      </Text>
      <Text
        fontSize="16px"
        justifyContent="center"
        textAlign="center"
        mb="1em"
        color={colors.generalText[colorMode]}
        mt="16px"
      >
        {t('page.checkout.more_info.subtitle').replace('{fullName}', fullName)}
      </Text>
      <Grid
        gap="24px"
        mt="30px"
        maxWidth="557px"
        w="100%"
        flexDirection="column"
        bg={colors.cardBg[colorMode]}
        p={[
          "28px 16px 45px 16px",
          "28px 16px 45px 16px",
          "28px 16px 45px 16px",
          "52px 52px 31px 52px"
        ]}
        borderRadius="8px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      >
        <Input
          name="inputCompanyName"
          type={'text'}
          placeholder={t('page.checkout.more_info.inputName')}
        />
        <Input
          name="inputPhoneNumber"
          type={'text'}
          placeholder={t('page.checkout.more_info.inputEmail')}
        />
        <SelectInputStyle
          placeholder={t('page.checkout.more_info.inputGender')}
          options={GENDER}
          onChange={(evt: any) => {
            const { value } = evt?.target
            console.log(value)
          }}
        />
        <Input
          name="inputAddress"
          type={'text'}
          placeholder={t('page.checkout.more_info.inputAddress')}
        />
        <Input
          name="inputCity"
          type={'text'}
          placeholder={t('page.checkout.more_info.inputCity')}
        />
        <Flex w="100%">
          <SelectInputStyle
            placeholder={t('page.checkout.more_info.inputState')}
            options={STATE}
            mr="0.5em"
            onChange={(evt: any) => {
              const { value } = evt?.target
              console.log(value)
            }}
          />
          <Input
            name="inputZip"
            type={'text'}
            placeholder={t('page.checkout.more_info.inputZip')}
          />
        </Flex>
        <Flex
          w="100%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Link to="/checkout/card-info">
            <Button
              boxShadow="2xl"
              backgroundColor="#4C26F0"
              width="236px"
              label={t('page.checkout.more_info.buttonNext')}
            ></Button>
          </Link>
          <Flex justifyContent="center" mt="24px">
            <Text
              fontSize="14px"
              textAlign="center"
              color={colors.generalText[colorMode]}
            >
              {t('page.checkout.more_info.textWrongAccount')}
            </Text>
            <Link to="/login">
              <Text
                fontSize="14px"
                textAlign="center"
                color="#5830F8"
                fontWeight="800"
                ml="0.5em"
              >
                {t('page.checkout.more_info.textLogin')}
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Grid>
    </Flex>
  )
}
