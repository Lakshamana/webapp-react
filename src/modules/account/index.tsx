import { useMemo } from 'react'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client'

import { Container, Text, MainLayout, ToggleButton, Select } from 'components'

import {
  ContentBlock,
  AccountInformation,
  SingleConfiguration,
  ConfigBox,
  PaymentMethods,
  Subscription,
  Navbar,
} from './components'

import { USER_LOCALE, USER_ACCOUNT } from 'config/constants'
import { QUERY_PROFILE } from 'services/graphql'
import { colors, sizes } from 'styles'
import { useThemeStore } from 'services/stores/theme'
import {
  PAYMENT_METHODS,
  LANGUAGES,
  initialValues,
  validationSchema,
} from './settings'

import { formatAccountInfo } from './utils'

const Account = () => {
  const { t, i18n } = useTranslation()
  const { colorMode } = useThemeStore()

  const { data: profileData } = useQuery(QUERY_PROFILE, {
    variables: {
      account: localStorage.getItem(USER_ACCOUNT),
    },
  })

  const accountInfo = useMemo(
    () => formatAccountInfo(profileData, t),
    [profileData, t]
  )

  const { values, setFieldValue } = useFormik({
    initialValues: {
      ...initialValues,
      locale: localStorage.getItem(USER_LOCALE) || initialValues.locale,
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: async () => {},
  })

  const handleLanguageChange = (evt: any) => {
    const { value } = evt?.target
    setFieldValue('locale', value)
    localStorage.setItem(USER_LOCALE, value)
    i18n.changeLanguage(value)
  }

  return (
    <MainLayout>
      <Container
        width={1}
        mt={3}
        mx={[sizes.paddingSm, sizes.paddingMd, sizes.paddingLg]}
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Navbar {...{ colorMode }} text={t('page.account.back')} />
        <ContentBlock
          mb={3}
          title={t('page.account.account_info')}
          {...{ colorMode }}
        >
          <ConfigBox>
            <AccountInformation
              data={accountInfo}
              updateText={t('page.account.update')}
            />
          </ConfigBox>
          <ConfigBox>
            <Text color={colors.generalText[colorMode]} mb={2}>
              {t('page.account.language_selection')}
            </Text>
            <Select
              options={LANGUAGES}
              value={values.locale}
              onChange={handleLanguageChange}
            />
          </ConfigBox>
          <ConfigBox>
            <SingleConfiguration
              text={t('page.account.push')}
              children={
                <>
                  <ToggleButton
                    checked={values.push}
                    onChange={() => setFieldValue('push', !values.push)}
                  />
                </>
              }
              {...{ colorMode }}
            />
          </ConfigBox>
          <ConfigBox>
            <SingleConfiguration
              text={t('page.account.delete_account')}
              action={{
                text: t('page.account.delete'),
                onClick: () => {},
                fontWeight: 'bold',
              }}
              {...{ colorMode }}
            />
          </ConfigBox>
        </ContentBlock>

        <ContentBlock
          mb={3}
          mt={[3, 3, 3, 0]}
          title={t('page.account.billing_information')}
          action={{
            text: t('page.account.billing_history'),
            underline: true,
            fontWeight: 400,
            fontSize: 14,
          }}
          {...{ colorMode }}
        >
          <ConfigBox>
            <SingleConfiguration
              text={t('page.account.your_subscription')}
              fontStyle={{ fontWeight: 'bold', fontSize: 18 }}
              action={{
                text: t('page.account.manage_subscription'),
                onClick: () => {},
                fontWeight: 'normal',
                underline: true,
                fontSize: 14,
                textAlign: 'end',
              }}
              {...{ colorMode }}
            />
            <Container flexDirection="column">
              <Subscription
                title={t('page.account.monthly_plan')}
                subtitle="Flamengo - Campeonato Carioca"
                value="$12.99/mo"
                fontStyle={{
                  fontSize: 20,
                  color: colors.grey['900'],
                }}
                fontValueStyle={{
                  fontSize: 20,
                  color: colors.grey['900'],
                }}
                {...{ colorMode }}
              />
              <Subscription
                title={t('page.account.next_billing')}
                value={`$12.99 ${t('page.account.on')} 08/12/21`}
                fontValueStyle={{
                  fontSize: 14,
                  color: colors.grey['800'],
                }}
                {...{ colorMode }}
              />
              <Subscription
                title={t('page.account.last_billing')}
                value={`$12.99 ${t('page.account.on')} 08/12/21`}
                separator={false}
                fontStyle={{
                  fontSize: 16,
                  color: colors.grey['650'],
                }}
                fontValueStyle={{
                  fontSize: 14,
                  color: colors.grey['650'],
                }}
                {...{ colorMode }}
              />
            </Container>
          </ConfigBox>
          <ConfigBox>
            <SingleConfiguration
              text={t('page.account.pause_subscription')}
              action={{
                text: t('page.account.pause'),
                onClick: () => {},
                fontWeight: 'bold',
              }}
              {...{ colorMode }}
            />
          </ConfigBox>
          <ConfigBox>
            <SingleConfiguration
              {...{ colorMode }}
              text={t('page.account.cancel_subscriptions')}
              action={{
                text: t('page.account.cancel'),
                onClick: () => {},
                fontWeight: 'bold',
              }}
            />
          </ConfigBox>
        </ContentBlock>

        <ContentBlock
          mb={3}
          mt={[3, 3, 3, 0]}
          title={t('page.account.payment_information')}
          action={{
            text: t('page.account.add_payment'),
            underline: true,
            fontWeight: 400,
            fontSize: 14,
          }}
          {...{ colorMode }}
        >
          <ConfigBox>
            <Text
              fontWeight="bold"
              color={colors.generalText[colorMode]}
              mb={3}
              fontSize={18}
            >
              {t('page.account.payment_method')}
            </Text>
            <Text
              fontWeight="bold"
              fontSize={12}
              color={colors.generalText[colorMode]}
            >
              {t('page.account.default')}
            </Text>
            <PaymentMethods
              strings={{
                update: t('page.account.update'),
                delete: t('page.account.delete'),
              }}
              selected={values.paymentMethod}
              data={PAYMENT_METHODS}
              onDelete={() => {}}
              onUpdate={() => {}}
              onSelect={(value: string) =>
                setFieldValue('paymentMethod', value)
              }
            />
          </ConfigBox>
        </ContentBlock>
      </Container>
    </MainLayout>
  )
}

export { Account }
