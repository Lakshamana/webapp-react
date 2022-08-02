import { configEnvs } from 'config/envs'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: configEnvs.googleTag
}

export const initializeGTM = () =>  TagManager.initialize(tagManagerArgs)

