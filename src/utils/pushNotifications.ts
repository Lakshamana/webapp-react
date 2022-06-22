import OneSignal from 'react-onesignal'
import i18n from 'config/i18n'
import { organizationData } from 'config/organization'

const { REACT_APP_ONE_SIGNAL_APP_ID, REACT_APP_ONE_SIGNAL_SAFARI_WEB_ID } =
  process.env

export const initializeOneSignal = () => {
  if (REACT_APP_ONE_SIGNAL_APP_ID && REACT_APP_ONE_SIGNAL_SAFARI_WEB_ID) {
    OneSignal.init({
      appId: REACT_APP_ONE_SIGNAL_APP_ID,
      safari_web_id: REACT_APP_ONE_SIGNAL_SAFARI_WEB_ID,
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
