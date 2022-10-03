import { useMediaQuery } from '@chakra-ui/media-query'
import { Spinner } from '@chakra-ui/react'
import { Link, Text } from 'components'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'
import { breakpoints, colors, sizes } from 'styles'
import SwiperCore, { Lazy, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import { SWIPPER_PARAMS } from './settings'
import { Content, Header, SwiperStyled } from './style'
import { Props } from './types'

SwiperCore.use([Navigation, Pagination, Lazy])

const CardsScroller = ({ children, title, moreUrl, isLoading, reachEnd }: Props) => {
  SWIPPER_PARAMS['navigation'] = {
    prevEl: `.swiper-button-prev`,
    nextEl: `.swiper-button-next`,
    disabledClass: 'disabled_swiper_button',
  }
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

  const RenderHeader = () => (
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

  return (
    <Content>
      <RenderHeader />
      <SwiperStyled
        style={{ overflow: 'visible' }}
        onReachEnd={reachEnd}
        {...SWIPPER_PARAMS}
      >
        <div className="swiper-wrapper">
          {children}
        </div>
        <div className="swiper-pagination-cards cards-scroller-pagination" />
        <div className={`swiper-button-prev`} />
        <div className={`swiper-button-next ${isLoading && 'loading'}`} >
          {
            isLoading &&
            <Spinner
              speed="0.65s"
              thickness={'3px'}
              size={'md'}
              color={colors.brand.action_link[colorMode]}
            />
          }
        </div>
      </SwiperStyled>
    </Content>
  )
}

export { CardsScroller }
