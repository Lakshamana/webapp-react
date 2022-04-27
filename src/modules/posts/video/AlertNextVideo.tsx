import { useEffect } from "react"
import { useHistory } from 'react-router'
import { Box, Collapse } from "@chakra-ui/react"
import { useTranslation } from 'react-i18next'
import { useVideoPlayerStore } from 'services/stores'

const AlertNextVideo = () => {
  const history = useHistory()
  const { t } = useTranslation()
  const { endedVideo, hasAutoplay, remainingTime, isLastVideo, nextVideo, setEndedVideo, setRemainingTime } = useVideoPlayerStore()
  const setIsLastVideo = useVideoPlayerStore(state => state.setIsLastVideo)

  useEffect(() => {
    if (isLastVideo) return
    if (endedVideo && hasAutoplay) {
      setEndedVideo(false)
      setIsLastVideo(true)
      history.push(nextVideo)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endedVideo, hasAutoplay])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setRemainingTime(false), [])

  return (
    <>
      {
        !isLastVideo &&
        <Collapse in={remainingTime && hasAutoplay} animateOpacity>
          <Box
            position={'absolute'}
            color={'blackAlpha.800'}
            fontWeight={'bolder'}
            zIndex={10}
            bottom={'4rem'}
            right={0}
            bgColor={'white'}
            px={12}
            py={3}
          >
            {t('page.post.redirect_next_video')}
          </Box>
        </Collapse>
      }
      {
        console.log(isLastVideo)
      }
    </>
  )
}

export { AlertNextVideo }