import React from 'react'
import { Link } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { CardsScroller } from 'components'
import { CollectionList } from './collectionItems'
import { Text } from 'components'
import { CollectionScrollerProps } from './types'
import { Header, ContentScroller } from './style'
import { colors, sizes } from 'styles'
import { useThemeStore } from 'services/stores/theme'

const CollectionScroller = ({
  items,
  sectionTitle,
  sectionUrl,
  hasMoreLink,
}: CollectionScrollerProps) => {
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
      <CardsScroller type="collection">
        <CollectionList items={items} />
      </CardsScroller>
    </ContentScroller>
  )
}

export { CollectionScroller }
