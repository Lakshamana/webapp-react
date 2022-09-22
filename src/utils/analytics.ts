import {
    authReport, postCommentReport, postLiveReactionReport,
    postReactionReport
} from 'config/analytics'
import {
    AuthReport, PostCommentReport, PostReactionReport
} from 'config/analytics/types'

type ContentType = 'post' | 'live'

export const sendAuthReport = (report: AuthReport) => authReport(report)

export const sendPostReactionReport = (
  report: PostReactionReport,
  type: ContentType
) => {
  type === 'live' ? postLiveReactionReport(report) : postReactionReport(report)
}

export const sendPostCommentReport = (report: PostCommentReport) =>
  postCommentReport(report)
