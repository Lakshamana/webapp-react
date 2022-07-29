import { configEnvs } from 'config/envs'
import ReactPixel from 'react-facebook-pixel'

export const initializeFacebookPixel = () => {
  if (configEnvs.facebookTag) {
    ReactPixel.init(configEnvs.facebookTag)
    ReactPixel.pageView()
  }
}
