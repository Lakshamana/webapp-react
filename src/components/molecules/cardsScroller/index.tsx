import SwiperCore, { Navigation, Pagination } from 'swiper'
import { PostsProps } from './types'
import { SWIPPER_PARAMS } from './settings'
import { SwiperStyled } from './style'
import { Content } from './style'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation, Pagination])

const CardsScroller = ({ children }: PostsProps) => {
  SWIPPER_PARAMS['navigation'] = {
    prevEl: `.swiper-button-prev`,
    nextEl: `.swiper-button-next`,
    disabledClass: 'disabled_swiper_button',
  }

  return (
    <Content>
      {children && (
        <SwiperStyled {...SWIPPER_PARAMS}>
          <div className="swiper-wrapper">{children}</div>
          <div className="swiper-pagination-cards cards-scroller-pagination" />
          <div className={`swiper-button-prev`} />
          <div className={`swiper-button-next`} />
        </SwiperStyled>
      )}
    </Content>
  )
}
export { CardsScroller }
