import { Divider, Flex, Text } from '@chakra-ui/react'
import imageBg from 'assets/background/bg-checkout-login.png'
import { Button, Input, SocialSigninButton } from 'components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'

export const CheckoutLogin = () => {
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  return (
    <Flex flexDirection="column" alignItems="center">
      <Text
        fontSize="32px"
        fontWeight="700"
        mt="30px"
        textAlign="center"
        color={colors.generalText[colorMode]}
      >{t('page.checkout.login.title')}</Text>
      <Text
        fontSize="16px"
        fontWeight="400"
        mb="40px"
        textAlign="center"
        color={colors.generalText[colorMode]}
        >{t('page.checkout.login.subtitle')}</Text>

      <Flex
        w={[
          'auto',
          'auto',
          'auto',
          'auto',
          '980px'
        ]}
        borderRadius="8px"
        boxShadow={[
          "none",
          "none",
          "none",
          "none",
          "0px 4px 4px rgba(0, 0, 0, 0.25)",
        ]}
        flexDir={[
          'column',
          'column',
          'column',
          'column',
          'row',
        ]}
        p={[
          "1em",
          "1em",
          "1em",
          "1em",
          "0",
        ]}
      >
        <Flex
          maxW="490px"
          w="100%"
          borderRadius={[
            "8px",
            "8px",
            "8px",
            "8px",
            "8px 0 0 8px"
          ]}
          flexDirection="column"
          justifyContent="flex-end"
          padding="32px"
          backgroundImage={`url(${imageBg})`}
          backgroundSize="100%"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          color="#fff"
          mb={[
            '1em',
            '1em',
            '1em',
            '1em',
            '0'
          ]}
        >
          <Text fontSize="30px" fontWeight="400">
            ABS Monthly Plan Lorem ipsum
          </Text>
          <Text fontSize="18px" fontWeight="400">
            Flamengo - Campeonato Carioca
          </Text>
          <Flex justifyContent="space-between" alignItems="center" mt="36px">
            <Text fontSize="14px" fontWeight="700">
              More Info
            </Text>
            <Flex alignItems="center">
              <Text fontSize="24px" fontWeight="400">
                $12,99
              </Text>
              <Text>/mo</Text>
            </Flex>
          </Flex>
          <Divider my="20px" />
          <Text fontSize="12px" fontWeight="400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua,
          </Text>
        </Flex>
        <Flex
          flex="1"
          borderRadius={[
            "8px",
            "8px",
            "8px",
            "8px",
            "0 8px 8px 0"
          ]}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          bg={colors.cardBg[colorMode]}
          padding="36px"
        >
          <Text fontSize="20px" color={colors.generalText[colorMode]}>
            {t('page.checkout.login.continue_with')}
          </Text>
          <Flex gridGap={7} marginY={30} justifyContent={'center'}>
            <SocialSigninButton kind={'google'}></SocialSigninButton>
            <SocialSigninButton kind={'facebook'}></SocialSigninButton>
            <SocialSigninButton kind={'apple'}></SocialSigninButton>
          </Flex>
          <Text fontSize="16px" color={colors.generalText[colorMode]} mb="24px">
            {t('page.checkout.login.or')}
          </Text>
          <Input
            name="payload.password"
            type={'text'}
            placeholder={t('page.checkout.login.input_label_fullname')}
          />
          <Input
            name="payload.password"
            type={'text'}
            placeholder={t('page.checkout.login.input_label_email')}
          />
          <Text
            textAlign="center"
            maxW="227px"
            w="100%"
            fontSize="12px"
            color={colors.generalText[colorMode]}
            my="12px"
          >
            {t('page.checkout.login.term_service')}
          </Text>
          <Link to="/checkout/more-info">
            <Button
              height="56px"
              width="236px"
              label={t('page.checkout.login.signup_btn')}
            ></Button>
          </Link>
          <Text
            textAlign="center"
            maxW="300px"
            w="100%"
            fontSize="12px"
            color={colors.generalText[colorMode]}
            mt="24px"
          >
            {t('page.checkout.login.already_have_account')}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
