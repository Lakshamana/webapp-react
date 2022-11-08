import { getData } from 'services/storage'
import { useOrganizationStore } from 'services/stores'
import Thumbor from 'thumbor-ts'
import { Format as ThumborFormat } from 'thumbor-ts/dist/types'

export enum ThumborInstanceTypes {
  AVATAR,
  IMAGE,
}

type Format = ThumborFormat | 'auto'

export interface ThumborParams {
  blur?: number
  smart?: boolean
  quality?: number
  size?: {
    width?: number
    height?: number
  }
  format?: Format
  fill?: string
  upscale?: boolean
}

export const useThumbor = () => {
  const { organization } = useOrganizationStore()

  const generateImage = (
    type: ThumborInstanceTypes,
    path: string,
    options?: ThumborParams,
    customBaseUrl?: string | null
  ) => {
    if (!organization || !path) return

    const getThumborType = () => {
      switch (type) {
        case ThumborInstanceTypes.AVATAR:
          return organization?.avatarCdnBaseUrl as string
        case ThumborInstanceTypes.IMAGE:
          return organization?.imageCdnBaseUrl as string
      }
    }

    const thumbor = Thumbor({
      serverUrl: customBaseUrl || getThumborType(),
      // securityKey: '' // encryption key is not required, but your link will be unsafe
    })

    if (!thumbor) {
      return ''
    }

    if (customBaseUrl) {
      return thumbor.setPath(path).buildUrl().replace('/unsafe', '')
    }

    let image = thumbor.setPath(path)

    const webpSupport = getData('webpsupport')

    if (webpSupport === 1) image = image.format('webp')

    if (options?.blur) image = image.blur(options.blur)

    if (options?.size)
      image = image.resize(options.size.width || 0, options.size.height || 0)

    if (options?.smart) image = image.smartCrop()

    if (options?.fill) image = image.fill(options.fill, true)

    if (!options?.upscale) image = image.noUpscale()

    const url = image
      .quality(options?.quality || 90)
      .buildUrl()
      .split('/filters')

    const url_w_filters = `${url[0]}${url[1]
      .replace(/:/g, '/filters:')
      .replace(' ', '')}`

    return url_w_filters?.replace('/unsafe', '')
  }

  return { generateImage }
}
