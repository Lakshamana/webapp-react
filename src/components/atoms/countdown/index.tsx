import { useState } from 'react'
import { Flex, Text, Box } from '@chakra-ui/react'
import { Props } from './types'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { format } from 'date-fns'
import { ptBR, enUS } from 'date-fns/locale'
import { APP_LOCALE } from 'config/constants'
import { getData } from 'services/storage'

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
      fontSize={{ base: '1.2rem', lg: '2.8rem' }}
      fontWeight="bolder"
      color={'white'}
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

  const NumberBox = ({ count, text }) => (
    <Flex
      color={'white'}
      flexDirection={'column'}
      alignItems={'center'}
      py={2}
      mx={{ base: 1, lg: 2 }}
      width={{ base: '80px', md: '120px' }}
      border="2px"
      borderRadius="md"
      borderColor="gray.200"
    >
      {count}
      {text}
    </Flex>
  )

  const RenderCountdown = () => {
    const isDiffDays = days() > 0
    const defineLanguage = getData(APP_LOCALE)
    return (
      <Box mt={1}>
        <Box>{renderText(t('page.post.live.will_start_in'))}</Box>
        <Flex justifyContent={'center'}>
          {!!isDiffDays &&
            <NumberBox
              count={renderText(`${days()}`)}
              text={t('page.post.live.days')}
            />
          }
          <NumberBox
            count={renderText(`${hours()}`)}
            text={t('page.post.live.hours')}
          />
          <NumberBox
            count={renderText(`${minutes()}`)}
            text={t('page.post.live.minutes')}
          />
          <NumberBox
            count={renderText(`${seconds()}`)}
            text={t('page.post.live.seconds')}
          />
        </Flex>
        <Flex
          justifyContent={'center'}
          mt={2}
        >
          {
            Date.parse(eventStartDate) &&
            renderText(format(
              new Date(eventStartDate),
              'P',
              { locale: defineLanguage === 'pt-BR' ? ptBR : enUS }
            ))
          }
        </Flex>
      </Box>
    )
  }

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
