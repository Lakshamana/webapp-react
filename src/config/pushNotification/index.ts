import { configEnvs } from 'config/envs'
import i18n from 'config/i18n'
import { organizationData } from 'config/organization'
import OneSignal from 'react-onesignal'

export async function runOneSignal() {
  if (
    configEnvs.onesignalAppId &&
    configEnvs.onesignalSafariWebId &&
    process.env.NODE_ENV === 'production'
  ) {
    await OneSignal.init({
      appId: configEnvs.onesignalAppId,
      safari_web_id: configEnvs.onesignalSafariWebId,
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
    OneSignal.showSlidedownPrompt()
  }
}
