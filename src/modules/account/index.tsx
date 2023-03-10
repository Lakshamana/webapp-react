import { useMutation } from '@apollo/client'
import { Box } from '@chakra-ui/layout'
import { Text, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import {
  AlertComponent,
  Container,
  Select,
  Skeleton,
  ToggleButton
} from 'components'
import { APP_LOCALE } from 'config/constants'
import { useAuth } from 'contexts/auth'
import { ForgetAccountInput, UpdatePasswordOnlyInput } from 'generated/graphql'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import OneSignal from 'react-onesignal'
import { useHistory } from 'react-router-dom'
import {
  MUTATION_CREATE_UPLOAD,
  MUTATION_FORGET_ACCOUNT,
  MUTATION_UPDATE_ACCOUNT,
  MUTATION_UPDATE_PASSWORD_ONLY,
  MUTATION_UPDATE_PROFILE
} from 'services/graphql'
import { saveData } from 'services/storage'
import { useAuthStore, useCommonStore } from 'services/stores'
import { useThemeStore } from 'services/stores/theme'
import { colors, sizes } from 'styles'
import { AlertObjectType } from 'types/common'
import {
  AccountInfo,
  ConfigBox,
  ContentBlock,
  ForgetAccount,
  Navbar,
  PaymentMethods,
  ProfileInfo,
  SingleConfiguration,
  Subscription,
  UpdatePassword
} from './components'
import { LANGUAGES, PAYMENT_METHODS } from './settings'

const AccountPage = () => {
  let history = useHistory()
  const { t, i18n } = useTranslation()
  const { colorMode } = useThemeStore()
  const { updateAccount, updateUser, getAccount, loadingAccount, signOut } =
    useAuth()
  const [updateAccountError, setUpdateAccountError] = useState('')
  const [updateProfileError, setUpdateProfileError] = useState('')
  const [forgetAccountError, setForgetAccountError] = useState('')

  const [isPushEnabled, setIsPushEnabled] = useState<boolean>()
  const [isPushDenied, setIsPushDenied] = useState<boolean>()

  const [updatePasswordMsg, setUpdatePasswordMsg] =
    useState<AlertObjectType | null>()
  const { user, account } = useAuthStore()
  const { setPageTitle } = useCommonStore()
  const useDisclosureProps = useDisclosure()

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

  const [updatePasswordOnly, { loading: loadingUpdatePassword }] = useMutation(
    MUTATION_UPDATE_PASSWORD_ONLY,
    {
      onCompleted: async (result) => {
        if (result.updatePasswordOnly.success)
          setUpdatePasswordMsg({
            message: t('page.account.password_updated'),
            type: 'success',
          })
        else
          setUpdatePasswordMsg({
            message: t('common.error.generic_api_error'),
            type: 'error',
          })
      },
      onError: (error) => {
        setUpdatePasswordMsg({ message: error.message, type: 'error' })
      },
    }
  )

  const callUpdatePassword = (payload: UpdatePasswordOnlyInput) => {
    updatePasswordOnly({
      variables: {
        payload: {
          ...payload,
        },
      },
    })
  }

  const [forgetAccount, { loading: loadingForgetAccount }] = useMutation(
    MUTATION_FORGET_ACCOUNT,
    {
      onCompleted: async () => signOut(),
      onError: async () =>
        setForgetAccountError(t('page.account.delete_account_error')),
    }
  )

  const [createUpload] = useMutation(MUTATION_CREATE_UPLOAD, {
    variables: {
      payload: {
        expireIn: 3600,
        filename: 'avatar-image.jpeg',
        isAvatar: true,
      },
    },
  })

  const callForgetAccount = (input: ForgetAccountInput) => {
    forgetAccount({
      variables: {
        forgetAccountId: account?.id,
        input,
      },
    })
  }

  useEffect(() => {
    getAccount()
    setPageTitle(t('page.account.title'))

    OneSignal.getNotificationPermission().then((result) => {
      setIsPushDenied(result === 'denied')

      if (result !== 'denied') {
        OneSignal.getSubscription().then((result: any) =>
          setIsPushEnabled(result)
        )
        OneSignal.on('subscriptionChange', function (isSubscribed: boolean) {
          setIsPushEnabled(isSubscribed)
        })
      }
    })
    // eslint-disable-next-line
  }, [])

  const handleLanguageChange = (evt: any) => {
    const { value } = evt?.target
    callUpdateMyProfile({ locale: value })
    i18n.changeLanguage(value)
    saveData(APP_LOCALE, value)
  }

  const onManageWebPushSubscriptionToggleClicked = () => {
    OneSignal.getSubscription().then((result: any) => {
      setIsPushEnabled(!result)
      OneSignal.setSubscription(!result)
    })
  }

  const callUpdateAvatar = async (image: any) => {
    try {
      const {
        data: {
          createUpload: { upload, media },
        },
      } = await createUpload()
      await axios.put(upload.url, image, {
        headers: { 'Content-Type': 'image/jpg' },
      })
      // TODO: mudar forma de chamar call update my profile
      setTimeout(
        async () => await callUpdateMyProfile({ avatar: media.id }),
        3000
      )
      useDisclosureProps.onClose()
    } catch (e) {
      console.error(e)
    }
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
                updateAvatar={callUpdateAvatar}
                useDisclosureProps={useDisclosureProps}
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
              <Select
                options={LANGUAGES}
                onChange={handleLanguageChange}
                defaultValue={i18n.language}
              />
            }
            {...{ colorMode }}
          />
          <SingleConfiguration
            text={t('page.account.push_notifications')}
            children={
              <ToggleButton
                size="md"
                isChecked={isPushEnabled}
                isDisabled={isPushDenied}
                onChange={onManageWebPushSubscriptionToggleClicked}
              />
            }
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
          <UpdatePassword
            updatePassword={callUpdatePassword}
            alertMessageType={updatePasswordMsg}
            isLoading={loadingUpdatePassword}
            dispatchAlert={() => setUpdatePasswordMsg(null)}
          ></UpdatePassword>
          <ForgetAccount
            error={forgetAccountError}
            isLoading={loadingForgetAccount}
            forgetAccount={callForgetAccount}
            dispatchAlert={() => setForgetAccountError('')}
          ></ForgetAccount>
        </ConfigBox>
      </ContentBlock>
      <ContentBlock
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
              onClick: () => history.push('/subscription-management'),
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
            selected="1"
            data={PAYMENT_METHODS}
            onDelete={() => {}}
            onUpdate={() => {}}
            onSelect={() => {}}
          />
        </ConfigBox>
      </ContentBlock>
    </Container>
  )
}

export { AccountPage }
