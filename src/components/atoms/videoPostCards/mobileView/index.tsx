import { Box, Flex, Image, Spacer, Spinner, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Button } from 'components'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { useCustomizationStore, useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { formattedSeconds, stripHTML } from 'utils/helperFunctions'
import { BlockedContent } from './styles'

type MobileViewProps = {
  id: string
  title?: string
  url?: string
  description?: Maybe<string>
  thumbnail?: string
  mediaLength?: Maybe<number>
  countViews?: number
  isExclusive: boolean
  isGeolocked?: boolean
  isPostPinned?: boolean
  isLoading: boolean
  handlePinPost: () => void
}

const MobileView = ({ ...props }: MobileViewProps) => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  const { activeChannelConfig } = useCustomizationStore()
  const isPostBlocked = props.isExclusive || props.isGeolocked

  return (
    <Box>
      <Box position={'relative'}> 
        <Image boxSize="auto" objectFit="contain" src={props.thumbnail}></Image>
        {isPostBlocked && (
          <BlockedContent>
            <Icon
              width={25}
              color={colors.white} 
              icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
            />
          </BlockedContent>
        )}
      </Box>
      <Text
        py={2}
        fontWeight="bolder"
        fontSize={'1.2rem'}
        color={colors.generalText[colorMode]}
      >
        {stripHTML(props.title || '')}
      </Text>
      <Text fontSize={'0.95rem'} color={colors.secondaryText[colorMode]}>
        {stripHTML(props.description || '')}
      </Text>
      <Flex mt={4}>
        {activeChannelConfig?.SETTINGS.DISPLAY_POST_THUMB_COUNT_VIEWS && (
          <Text
            fontWeight={'bolder'}
            display="flex"
            alignItems="center"
            fontSize="0.95rem"
            color={colors.generalText[colorMode]}
          >
            {props.countViews || 0} {t('page.post.views')}
          </Text>
        )}
        <Spacer px={1} />
        {props.mediaLength && (
          <Text
            fontWeight={'bolder'}
            display="flex"
            alignItems="center"
            fontSize="0.95rem"
            color={colors.generalText[colorMode]}
          >
            {formattedSeconds(props?.mediaLength)}
          </Text>
        )}
      </Flex>
      <Box my={5}>
        <Button
          onClick={() => history.push(`${props.url}`)}
          iconName={'play'}
          label={t('page.categories.watch_now')}
        />
        {props.isLoading ? (
          <Button mt={2} variant={'outline'} disabled>
            <Spinner
              thickness="1px"
              width="15px"
              height="15px"
              mr={2}
              color={colors.brand.primary[colorMode]}
            />
            <Text>{t('page.categories.my_list')}</Text>
          </Button>
        ) : (
          <Button
            mt={2}
            variant={'outline'}
            iconName={props.isPostPinned ? 'check' : 'plus-circle'}
            label={t('page.categories.my_list')}
            onClick={props.handlePinPost}
          />
        )}
      </Box>
    </Box>
  )
}

export { MobileView }
