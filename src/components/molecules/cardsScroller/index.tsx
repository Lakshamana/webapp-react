import SwiperCore, { Navigation, Pagination } from 'swiper'
import { PostsProps } from './types'
import { SWIPPER_PARAMS } from './settings'
import { SwiperStyled } from './style'
import { Content } from './style'
import 'swiper/swiper-bundle.min.css'
import { RANDOM_ID } from 'utils'
import { useEffect } from 'react'

SwiperCore.use([Navigation, Pagination])

const CardsScroller = ({ children, type }: PostsProps) => {
  let randomId = `${type}-${RANDOM_ID()}`

  SWIPPER_PARAMS['navigation'] = {
    prevEl: `.swiper-button-prev.${randomId}`,
    nextEl: `.swiper-button-next.${randomId}`,
    disabledClass: 'disabled_swiper_button',
  }

  useEffect(() => {
    var slides = document.getElementsByClassName("swiper-slide");
    for (var i = 0; i < slides.length; i++) {
      const item: any = slides.item(i)
      const newStyle = `${item?.getAttribute('style')} height: ${item?.offsetHeight}px;`
      item?.setAttribute('style', newStyle)
    }
  }, [])

  return (
    <Content>
      <SwiperStyled {...SWIPPER_PARAMS}>
        <div className="swiper-wrapper">{children}</div>
        <div className="swiper-pagination-cards cards-scroller-pagination" />
        <div className={`swiper-button-prev ${randomId} disabled_swiper_button`} />
        <div className={`swiper-button-next ${randomId}`} />
      </SwiperStyled>
    </Content>
  )
}
export { CardsScroller }
