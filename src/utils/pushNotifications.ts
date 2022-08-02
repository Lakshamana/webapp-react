import { configEnvs } from 'config/envs'
import i18n from 'config/i18n'
import { organizationData } from 'config/organization'
import OneSignal from 'react-onesignal'

export const initializeOneSignal = () => {
  if (configEnvs.onesignalAppId && configEnvs.onesignalSafariWebId) {
    OneSignal.init({
      appId: configEnvs.onesignalAppId,
      safari_web_id: configEnvs.onesignalSafariWebId,
      autoResubscribe: true,
      promptOptions: {
        slidedown: {
          prompts: [
            {
              type: 'push',
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
  }
}
