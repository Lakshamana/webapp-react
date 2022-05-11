import SwiperCore, { Navigation, Pagination } from 'swiper'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'
import { Text, Link } from 'components'
import { Props } from './types'
import { SWIPPER_PARAMS } from './settings'
import { SwiperStyled } from './style'
import { Content, Header } from './style'
import { colors, sizes, breakpoints } from 'styles'

import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation, Pagination])

const CardsScroller = ({ children, title, moreUrl }: Props) => {
  SWIPPER_PARAMS['navigation'] = {
    prevEl: `.swiper-button-prev`,
    nextEl: `.swiper-button-next`,
    disabledClass: 'disabled_swiper_button',
  }
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

  const renderHeader = () => {
    return (
      <Header>
        <Text
          color={colors.generalText[colorMode]}
          fontSize={isDesktop ? '1.55rem' : '1.3rem'}
          paddingLeft={[sizes.paddingSm, sizes.paddingSm, sizes.paddingMd]}
          marginRight={'10px'}
          fontWeight={'bolder'}
        >
          {title}
        </Text>
        {!!moreUrl?.length && (
          <Link
            color={colors.brand.action_link[colorMode]}
            fontSize={isDesktop ? '1.27rem' : '1.16rem'}
            to={moreUrl}
          >
            {t('common.more')}
          </Link>
        )}
      </Header>
    )
  }

  return (
    <Content>
      {renderHeader()}
      <SwiperStyled {...SWIPPER_PARAMS}>
        <div className="swiper-wrapper">{children}</div>
        <div className="swiper-pagination-cards cards-scroller-pagination" />
        <div className={`swiper-button-prev`} />
        <div className={`swiper-button-next`} />
      </SwiperStyled>
    </Content>
  )
}

export { CardsScroller }
