import {
  Checkbox,
  Divider,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import imageBg from 'assets/background/bg-checkout-login.png'
import { Button, Input, SelectInputStyle } from 'components'
import { ModalNotification, ModalType } from '../components/notification'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { useEffect, useState } from 'react'
import { InputSpreedly } from './style'

const {
  REACT_APP_SPREENDLY_KEY,
}  = process.env

export const CardInfo = () => {
  const [ modalType ] = useState(ModalType.success)
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  // @ts-ignore
  const { Spreedly } = window
  const [state, setstate] = useState({
    paymentErrors: [],
    paymentProcessing: false,
    paymentCaptured: false,
    route: 'credit-card'
  })

  const [disabledButton, setdisabledButton] = useState(true)

  useEffect(() => {
    if (Spreedly) {
      setupSpreedly()
    }
   return () => Spreedly.removeHandlers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const setupSpreedly = () => {
    Spreedly.init(REACT_APP_SPREENDLY_KEY, {
      numberEl: 'spreedly-number',
      cvvEl: 'spreedly-cvv'
    });
    
    Spreedly.on('ready', () => {
      setdisabledButton(false)
      Spreedly.setParam('allow_blank_name', true);
      Spreedly.setParam('allow_expired_date', true);
      // credit card number
      Spreedly.setPlaceholder('number', t("page.checkout.card_info.card_number"));
      Spreedly.setFieldType('number', 'text');
      Spreedly.setStyle('number', `font-size: 16px; background: transparent; color: ${colors.generalText[colorMode]}`);
      Spreedly.setNumberFormat('prettyFormat');
      // cvv
      Spreedly.setPlaceholder('cvv', t("page.checkout.card_info.cvv"));
      Spreedly.setFieldType('cvv', 'text');
      Spreedly.setStyle('cvv', `font-size: 16px; background: transparent; color: ${colors.generalText[colorMode]}`);
      // testing
      // Spreedly.setValue('number', '4111111111111111');
      // Spreedly.setValue('cvv', '123');
    });

    Spreedly.on('errors', (errors: any) => {
      for (let i = 0; i < errors.length; i++) {
        var error = errors[i];
        console.log(error);
      }

      setstate({ ...state, paymentProcessing: false });

      // refresh the form
      Spreedly.reload();
      // resetForm()

      const errorMessages = errors.map((err: any) => err.message);
      setstate({ ...state, paymentErrors: errorMessages });
    });

    Spreedly.on('paymentMethod', (token: string, pmData: any) =>{
      // continuar implementação da chamada
      console.log('tokenizeCreditCard: ',token)
      console.log(pmData)
    })
  }

  return (
    <Flex flexDirection="column" alignItems="center">
      <Text
        fontSize="32px"
        fontWeight="700"
        mt="30px"
        textAlign="center"
        color={colors.generalText[colorMode]}
      >
        {t('page.checkout.card_info.title')}
      </Text>
      <Text
        fontSize="16px"
        fontWeight="400"
        mb="40px"
        textAlign="center"
        color={colors.generalText[colorMode]}
      >
        {t('page.checkout.card_info.subtitle')}
      </Text>

      <Flex
        w={['auto', 'auto', 'auto', 'auto', '980px']}
        borderRadius="8px"
        boxShadow={[
          'none',
          'none',
          'none',
          'none',
          '0px 4px 4px rgba(0, 0, 0, 0.25)',
        ]}
        flexDir={['column', 'column', 'column', 'column', 'row']}
        p={['1em', '1em', '1em', '1em', '0']}
      >
        <Flex
          maxW="490px"
          w="100%"
          borderRadius={['8px', '8px', '8px', '8px', '8px 0 0 8px']}
          flexDirection="column"
          justifyContent="flex-end"
          padding="32px"
          backgroundImage={`url(${imageBg})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          color="#fff"
          mb={['1em', '1em', '1em', '1em', '0']}
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
          borderRadius={['8px', '8px', '8px', '8px', '0 8px 8px 0']}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          bg={colors.cardBg[colorMode]}
          padding="36px"
          gridGap="1em"
        >
          <Input
            name="payload.password"
            type={'text'}
            placeholder={t('page.checkout.card_info.card_name')}
          />
          <InputSpreedly id="spreedly-number" />
          <Flex w="100%" gridGap="1em">
            <Input
              name="payload.password"
              type={'text'}
              placeholder={t('page.checkout.card_info.date')}
            />
            <InputSpreedly id="spreedly-cvv" />
          </Flex>
          <SelectInputStyle
            placeholder={t('page.checkout.card_info.country')}
            options={[
              { value: 'Aliqua', label: 'Aliqua cupidatat id' },
              { value: 'cupidatat', label: 'Aliqua cupidatat id' },
            ]}
            onChange={(evt: any) => {
              const { value } = evt?.target
              console.log(value)
            }}
          />
          <Divider color={colors.secondaryText[colorMode]} />

          <Input
            name="payload.password"
            type={'text'}
            placeholder={t('page.checkout.card_info.full_name')}
          />

          <Flex w="100%" gridGap="1em">
            <Input
              name="payload.password"
              type={'text'}
              placeholder={t('page.checkout.card_info.email')}
            />
            <Input
              name="payload.password"
              type={'text'}
              placeholder={t('page.checkout.card_info.CPF')}
            />
          </Flex>

          <Flex alignItems="flex-start" gridGap="12px" mt="1em">
            <Checkbox defaultIsChecked fontSize="12px"></Checkbox>
            <Text fontSize="12px" color={colors.generalText[colorMode]}>
              {t('page.checkout.card_info.authorize')}
            </Text>
          </Flex>
            <Button
              height="56px"
              width="236px"
            label={t('page.checkout.card_info.place_you_order')}
          ></Button>
        </Flex>
      </Flex>
      <ModalNotification {...{ isOpen, onOpen, onClose, modalType }} />
    </Flex>
  )
}
