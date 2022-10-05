import { configEnvs } from 'config/envs'
import i18n from 'config/i18n'
import { organizationData } from 'config/organization'

window.OneSignal = window.OneSignal || []
export const OneSignal = window.OneSignal

export const initializeOneSignal = async () => {
  if (configEnvs.onesignalAppId && configEnvs.onesignalSafariWebId) {
    await OneSignal.push(() => {
      OneSignal.init({
        appId: configEnvs.onesignalAppId,
        safari_web_id: configEnvs.onesignalSafariWebId,
        autoResubscribe: false,
        promptOptions: {
          slidedown: {
            prompts: [
              {
                type: 'push',
                autoPrompt: false,
                text: {
                  actionMessage: i18n.t('common.push.title', {
                    org: organizationData?.name,
                  }),
                  acceptButton: i18n.t('common.push.allow'),
                  cancelButton: i18n.t('common.push.cancel'),
                },
              },
            ],
          },
        },
      })
    })
  }
}

export function getSubscriptionState() {
  return Promise.all([
    OneSignal.isPushNotificationsEnabled(),
    OneSignal.isOptedOut(),
  ]).then(function (result) {
    let isPushEnabled = result[0]
    let isOptedOut = result[1]

    return {
      isPushEnabled: isPushEnabled,
      isOptedOut: isOptedOut,
    }
  })
}

export function isPushPermissionDenied() {
  return OneSignal.getNotificationPermission().then(function (result: any) {
    return result === 'denied'
  })
}

export function askForPushPermission() {
  OneSignal.push(function () {
    OneSignal.showSlidedownPrompt()
  })
}
