import { useState } from 'react'
import { Flex, Text, Box } from '@chakra-ui/react'
import { Props } from './types'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Countdown = ({ eventStartDate, fallbackMessage }: Props) => {
  const { t } = useTranslation()
  const [now, setNow] = useState<number>(
    Math.trunc(new Date().getTime() / 1000)
  )
  const [intervalId, setIntervalId] = useState<number>(0)

  const dateInMilliseconds = Math.trunc(Date.parse(eventStartDate) / 1000)

  const isCountdownRunning = now <= dateInMilliseconds

  const seconds = () => {
    let sec = (dateInMilliseconds - now) % 60 || 0
    return twoDigits(sec)
  }

  const minutes = () => {
    let min = Math.trunc((dateInMilliseconds - now) / 60) % 60 || 0
    return twoDigits(min)
  }

  const hours = () => {
    let hrs = Math.trunc((dateInMilliseconds - now) / 60 / 60) % 24 || 0
    return twoDigits(hrs)
  }

  const days = () => {
    let days = Math.trunc((dateInMilliseconds - now) / 60 / 60 / 24) || 0
    return twoDigits(days)
  }

  useEffect(() => {
    if (!isCountdownRunning) {
      window.clearInterval(intervalId)
    }
    // eslint-disable-next-line
  }, [isCountdownRunning])

  useEffect(() => {
    setIntervalId(
      window.setInterval(() => {
        setNow(Math.trunc(new Date().getTime() / 1000))
      }, 1000)
    )
    return () => window.clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderText = (value: string) => (
    <Text
      fontSize={{ base: '1.5rem', sm: '2rem', lg: '2.8rem' }}
      fontWeight="bolder"
      color="white"
      textAlign="center"
    >
      {value}
    </Text>
  )

  const twoDigits = (value: any) => {
    if (value < 0) {
      return '00'
    }
    if (value.toString().length <= 1) {
      return `0${value}`
    }
    return value
  }

  const RenderCountdown = () => (
    <div>
      <Box>{renderText(t('page.post.live.will_start_in'))}</Box>
      <Box display="flex">
        {!!hours.length && <Box mr={4}>{renderText(`${days()}d`)}</Box>}
        {renderText(`${hours()}h`)}
        {renderText(`${minutes()}m`)}
        {renderText(`${seconds()}s`)}
      </Box>
    </div>
  )

  return (
    <Flex
      direction="column"
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      margin="auto"
      padding={5}
    >
      {isCountdownRunning ? <RenderCountdown /> : renderText(fallbackMessage)}
    </Flex>
  )
}

export { Countdown }
