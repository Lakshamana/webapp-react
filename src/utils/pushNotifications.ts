import OneSignal from 'react-onesignal'
import i18n from 'config/i18n'
import { getData } from 'services/storage'
import { ORGANIZATION_INFO } from 'config/constants'

const { REACT_APP_ONE_SIGNAL_APP_ID, REACT_APP_ONE_SIGNAL_SAFARI_WEB_ID } =
  process.env

const org = getData(ORGANIZATION_INFO)

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
                actionMessage: i18n.t('common.push.title', { org: org?.name}),
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
