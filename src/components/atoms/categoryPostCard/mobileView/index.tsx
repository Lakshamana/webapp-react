import { Box, Image, Spinner, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Button } from 'components'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { stripHTML } from 'utils/helperFunctions'
import { BlockedContent } from './styles'

type MobileViewProps = {
  id: string
  url?: string
  thumbnail?: string
  title?: string
  description?: Maybe<string>
  isCategoryPinned?: boolean
  isExclusive?: boolean
  isGeolocked?: boolean
  isLoading: boolean
  handlePinCategory: () => void
}

const MobileView = ({ ...props }: MobileViewProps) => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  const isCategoryBlocked = props.isExclusive || props.isGeolocked

  return (
    <Box>
      <Box position={'relative'}>
        <Image boxSize="auto" objectFit="contain" src={props.thumbnail}></Image>
        {isCategoryBlocked && (
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
            iconName={props.isCategoryPinned ? 'check' : 'plus-circle'}
            label={t('page.categories.my_list')}
            onClick={props.handlePinCategory}
          />
        )}
      </Box>
    </Box>
  )
}

export { MobileView }
