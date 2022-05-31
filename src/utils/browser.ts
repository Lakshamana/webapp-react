import BrowserDetect from 'browser-detect'
import { BrowserDetectInfo } from 'browser-detect/dist/types/browser-detect.interface'

export const detect = (): BrowserDetectInfo => {
  return BrowserDetect()
}

export function isMobile(): boolean {
  const info = detect()

  return info.mobile || false
}
