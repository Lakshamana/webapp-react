import { Status } from 'generated/graphql'
import { LivestreamBadge } from 'types/livestreams'
import { colors } from 'styles'
import i18n from 'config/i18n'
import { ColorMode } from 'types/common'

export const StatusBadge = (
  status: Status,
  colorMode: ColorMode
): LivestreamBadge => {
  const Badge = {
    LIVE: {
      label: i18n.t('page.post.live.live'),
      color: colors.brand.live_badges?.live,
    },
    SCHEDULED: {
      label: i18n.t('page.post.live.upcoming'),
      color: colors.brand.live_badges?.upcoming,
    },
    PREPARING: {
      label: i18n.t('page.post.live.upcoming'),
      color: colors.brand.live_badges?.upcoming,
    },
    FINISHED: {
      label: i18n.t('page.post.live.finished'),
      color: colors.brand.live_badges?.finished,
    },
    default: {
      label: i18n.t('page.post.live.upcoming'),
      color: colors.brand.primary[colorMode],
    },
  }
  return Badge[status] || Badge.default
}