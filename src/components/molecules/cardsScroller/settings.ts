import { SwiperOptions } from 'swiper'

export const SWIPPER_PARAMS: SwiperOptions = {
  initialSlide: 0,
  spaceBetween: 15,
  speed: 800,
  setWrapperSize: true,
  roundLengths: false,
  watchOverflow: true,
  lazy: true,
  touchMoveStopPropagation: true,
  touchStartPreventDefault: true,
  freeModeMomentum: false,
  grabCursor: true,
  freeModeMomentumBounce: false,
  slidesOffsetAfter: 32,
  slidesOffsetBefore: 32,
  watchSlidesVisibility: true,
  slideVisibleClass: 'visibleCard',
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    1440: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    425: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  pagination: {
    el: '.cards-scroller-pagination',
    clickable: true,
  },
}
