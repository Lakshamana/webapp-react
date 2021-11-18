import { useMemo } from 'react'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'

import { Container, Text, MainLayout, ToggleButton } from 'components'

import {
  ContentBlock,
  AccountInformation,
  SingleConfiguration,
  ConfigBox,
  PaymentMethods,
  Subscription,
  Navbar,
} from './components'

import { colors } from 'styles'
import { useThemeStore } from 'services/stores/theme'
import {
  ACCOUNT_INFO,
  PAYMENT_METHODS,
  initialValues,
  validationSchema,
} from './settings'

import { formatAccountInfo } from './utils'

const Account = () => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const accountInfo = useMemo(() => formatAccountInfo(ACCOUNT_INFO), [])

  const { values, setFieldValue, handleSubmit, handleChange, errors } =
    useFormik({
      initialValues,
      validationSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: async () => {},
    })

  return (
    <MainLayout>
      <Container
        width={1}
        my={2}
        mx={4}
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Navbar
          onClick={() => {}}
          {...{ colorMode }}
          text={t('page.account.back')}
        />
        <ContentBlock
          title={t('page.account.account_info')}
          idented
          {...{ colorMode }}
        >
          <ConfigBox>
            <AccountInformation data={accountInfo} />
          </ConfigBox>
          <ConfigBox>
            <Text color={colors.generalText[colorMode]} mb={2}>
              {t('page.account.language_selection')}
            </Text>
          </ConfigBox>
          <ConfigBox>
            <SingleConfiguration
              text={t('page.account.push')}
              children={
                <>
                  <ToggleButton
                    isChecked={values.push}
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
          idented
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
                fontWeight: 'bold',
                underline: true,
                fontSize: 14,
              }}
              {...{ colorMode }}
            />
            <Container flexDirection="column">
              <Subscription
                title={t('page.account.monthly_plan')}
                subtitle="Flamengo - Campeonato Carioca"
                value="$12.99/mo"
                fontStyle={{ fontSize: 20 }}
                fontValueStyle={{ fontSize: 20 }}
              />
              <Subscription
                title={t('page.account.next_billing')}
                value="$12.99/mo on 08/12/21"
                fontValueStyle={{ fontSize: 14, color: colors.grey['800'] }}
              />
              <Subscription
                title={t('page.account.last_billing')}
                value="$12.99/mo on 08/12/21"
                separator={false}
                fontStyle={{ fontSize: 16, color: colors.grey['650'] }}
                fontValueStyle={{ fontSize: 14, color: colors.grey['650'] }}
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
          idented
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
              data={PAYMENT_METHODS}
              onDelete={() => {}}
              onUpdate={() => {}}
              onSelect={() => {}}
            />
          </ConfigBox>
        </ContentBlock>
      </Container>
    </MainLayout>
  )
}

export { Account }
