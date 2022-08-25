import { Badge, Box, Image, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Button } from 'components'
import { Status } from 'generated/graphql'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { stripHTML } from 'utils/helperFunctions'
import { BlockedContent } from './styles'

type MobileViewProps = {
  id: string
  title?: string
  description?: string
  url?: string
  thumbnail?: string
  status?: string | null
  isExclusive?: boolean
  isGeolocked?: boolean
}

const MobileView = ({ ...props }: MobileViewProps) => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  const isLiveEventBlocked = props.isExclusive || props.isGeolocked

  const isLive = props.status === Status.Live

  return (
    <Box>
      <Box position={'relative'}>
        <Image boxSize="auto" objectFit="contain" src={props.thumbnail}></Image>
        {isLiveEventBlocked && (
          <BlockedContent>
            <Icon
              width={25}
              color={colors.white}
              icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
            />
          </BlockedContent>
        )}
        {isLive && (
          <Badge
            position="absolute"
            top="0"
            right="0"
            m={2}
            fontWeight="700"
            color={colors.generalText[colorMode]}
            background={colors.brand.live_badges.live}
          >
            Live
          </Badge>
        )}
      </Box>
      <Text
        py={2}
        fontWeight="bolder"
        fontSize={'1.2rem'}
        noOfLines={2}
        color={colors.generalText[colorMode]}
      >
        {stripHTML(props.title || '')}
      </Text>
      <Text fontSize={'0.95rem'} noOfLines={6} color={colors.secondaryText[colorMode]}>
        {stripHTML(props.description || '')}
      </Text>
      <Box my={5}>
        <Button
          onClick={() => history.push(`${props.url}`)}
          iconName={'play'}
          label={t('page.categories.watch_now')}
        />
      </Box>
    </Box>
  )
}

export { MobileView }
