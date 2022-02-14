import { Link } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { CardsScroller } from 'components'
import { Text } from 'components'
import { OndemandList } from './ondemandItems'
import { VideoScrollerProps } from './types'
import { Header, ContentScroller } from './styles'
import { colors, sizes } from 'styles'
import { useThemeStore } from 'services/stores/theme'

const OnDemandScroller = ({
  items,
  sectionTitle,
  sectionUrl,
  hasMoreLink,
}: VideoScrollerProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()

  return (
    <ContentScroller>
      <Header>
        <Text
          color={colors.generalText[colorMode]}
          fontSize={'1.55rem'}
          paddingLeft={sizes.paddingMd}
          marginRight={'10px'}
          fontWeight={'bolder'}
        >
          {sectionTitle || ''}
        </Text>
        {hasMoreLink ? (
          <Link
            color={colors.brand.primary[colorMode]}
            fontSize={'1.27rem'}
            to={sectionUrl}
          >
            {t('common.more')}
          </Link>
        ) : (
          ''
        )}
      </Header>
      <CardsScroller type="ondemand">
        <OndemandList items={items} />
      </CardsScroller>
    </ContentScroller>
  )
}

export { OnDemandScroller }
