import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@apollo/client'
import { Box } from '@chakra-ui/layout'

import {
  Container,
  Modal,
  Select,
  Button,
  Skeleton,
  AlertComponent,
  ToggleButton,
} from 'components'

import {
  ContentBlock,
  AccountInfo,
  SingleConfiguration,
  ConfigBox,
  ProfileInfo,
  Navbar,
} from './components'

import { APP_LOCALE } from 'config/constants'
import {
  MUTATION_UPDATE_ACCOUNT,
  MUTATION_UPDATE_PROFILE,
} from 'services/graphql'
import { sizes } from 'styles'
import { useThemeStore } from 'services/stores/theme'
import { useOrganizationStore } from 'services/stores'
import { useAuth } from 'contexts/auth'
import { useAuthStore } from 'services/stores'
import { LANGUAGES } from './settings'

import { saveData } from 'services/storage'
import { useEffect } from 'react'

const AccountPage = () => {
  const { t, i18n } = useTranslation()
  const { colorMode } = useThemeStore()
  const { organization } = useOrganizationStore()
  const { updateAccount, updateUser, getAccount, loadingAccount } = useAuth()
  const [updateAccountError, setUpdateAccountError] = useState('')
  const [updateProfileError, setUpdateProfileError] = useState('')
  const [openDeleteAccountModal, setOpenDeleteAccountModal] = useState(false)
  const { user, account } = useAuthStore()
  const btnFontSize = '14px'

  const [updateMyAccount, { loading: loadingUpdateAccount }] = useMutation(
    MUTATION_UPDATE_ACCOUNT,
    {
      onCompleted: async (result) => {
        if (!result?.updateMyAccount) {
          setUpdateAccountError(t('common.error.generic_api_error'))
          return
        }
        updateAccount(result.updateMyAccount)
      },
      onError: (error) => {
        setUpdateAccountError(`${error.message}`)
      },
    }
  )

  const callUpdateMyAccount = (value: Object) => {
    updateMyAccount({
      variables: {
        payload: {
          ...value,
        },
      },
    })
  }

  const [updateMyProfile, { loading: loadingUpdateProfile }] = useMutation(
    MUTATION_UPDATE_PROFILE,
    {
      onCompleted: async (result) => {
        if (!result?.updateMyProfile) {
          setUpdateProfileError(t('common.error.generic_api_error'))
          return
        }
        updateUser(result.updateMyProfile)
      },
      onError: (error) => {
        setUpdateProfileError(`${error.message}`)
      },
    }
  )

  const callUpdateMyProfile = (value: Object) => {
    updateMyProfile({
      variables: {
        payload: {
          ...value,
        },
      },
    })
  }

  useEffect(() => {
    getAccount()
    // eslint-disable-next-line
  }, [])

  const handleLanguageChange = (evt: any) => {
    const { value } = evt?.target
    i18n.changeLanguage(value)
    saveData(APP_LOCALE, value)
  }

  return (
    <Container
      width={1}
      mt={3}
      mx={[sizes.paddingSm, sizes.paddingMd, sizes.paddingLg]}
      flexWrap="wrap"
      justifyContent="space-between"
    >
      <Navbar {...{ colorMode }} text={t('page.account.back')} />{' '}
      <ContentBlock
        mb={[3, 3, 3, 4]}
        title={t('page.account.profile_info')}
        {...{ colorMode }}
      >
        <Skeleton isLoaded={!loadingAccount}>
          <ConfigBox>
            {updateProfileError && (
              <Box mb={4}>
                <AlertComponent
                  type={'error'}
                  description={updateProfileError}
                  onClose={() => setUpdateProfileError('')}
                ></AlertComponent>
              </Box>
            )}
            {!loadingAccount && user && (
              <ProfileInfo
                locale={i18n.language}
                user={user}
                updateProfile={callUpdateMyProfile}
                isLoading={loadingUpdateProfile}
              />
            )}
          </ConfigBox>
        </Skeleton>
      </ContentBlock>
      <ContentBlock
        mb={[3, 3, 3, 4]}
        title={t('page.account.account_info')}
        {...{ colorMode }}
      >
        <Skeleton isLoaded={!loadingAccount}>
          <ConfigBox>
            {updateAccountError && (
              <Box mb={4}>
                <AlertComponent
                  type={'error'}
                  description={updateAccountError}
                  onClose={() => setUpdateAccountError('')}
                ></AlertComponent>
              </Box>
            )}
            {!loadingAccount && account && (
              <AccountInfo
                account={account}
                updateAccount={callUpdateMyAccount}
                isLoading={loadingUpdateAccount}
              />
            )}
          </ConfigBox>
        </Skeleton>
      </ContentBlock>
      <ContentBlock
        mb={[3, 3, 3, 4]}
        title={t('page.account.account_settings')}
        {...{ colorMode }}
      >
        <ConfigBox>
          <SingleConfiguration
            text={t('page.account.language_selection')}
            children={
              <Select options={LANGUAGES} onChange={handleLanguageChange} />
            }
            {...{ colorMode }}
          />
          <SingleConfiguration
            text={t('page.account.push_notifications')}
            children={<ToggleButton size="md" onChange={() => {}} />}
            {...{ colorMode }}
          />
        </ConfigBox>
      </ContentBlock>
      <ContentBlock
        mb={[3, 3, 3, 4]}
        title={t('page.account.security')}
        {...{ colorMode }}
      >
        <ConfigBox>
          <SingleConfiguration
            text={t('page.account.password')}
            children={
              <Button
                size="sm"
                width="auto"
                fontSize={btnFontSize}
                variant="link"
                color="red"
                label={t('page.account.update_password')}
              ></Button>
            }
            {...{ colorMode }}
          />
          <SingleConfiguration
            text={t('page.account.delete_account')}
            children={
              <Button
                size="sm"
                width="auto"
                fontSize={btnFontSize}
                variant="link"
                color="red"
                onClick={() => setOpenDeleteAccountModal(true)}
                label={t('page.account.delete')}
              ></Button>
            }
            {...{ colorMode }}
          />
        </ConfigBox>

        <Modal
          size="xl"
          isCentered
          title={t('page.account.delete_account')}
          subtitle={t('page.account.delete_account_info', {
            organization: organization?.name,
          })}
          isOpen={openDeleteAccountModal}
          onClose={() => setOpenDeleteAccountModal(false)}
          actionLabel={t('page.account.delete')}
          // onConfirm={forgetAccount}
        ></Modal>
      </ContentBlock>
      {/* <ContentBlock
          mb={[3, 3, 3, 4]}
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
        </ContentBlock> */}
      {/* <ContentBlock
          mb={[3, 3, 3, 4]}
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
        </ContentBlock> */}
    </Container>
  )
}

export { AccountPage }
