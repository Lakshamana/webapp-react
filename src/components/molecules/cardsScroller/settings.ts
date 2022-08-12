import { SwiperOptions } from 'swiper'

export const SWIPPER_PARAMS: SwiperOptions = {
  autoHeight: true,

  spaceBetween: 10,
  observer: true,
  preloadImages: true,
  resizeObserver: true,
  speed: 800,
  watchOverflow: true,
  autoplay: false,
  lazy: true,
  allowTouchMove: true,
  touchMoveStopPropagation: true,
  touchStartPreventDefault: true,
  grabCursor: false,
  slidesOffsetAfter: 32,
  slidesOffsetBefore: 32,
  slideVisibleClass: 'visibleCard',
  breakpoints: {
    1440: {
      slidesPerView: 5.3,
      slidesPerGroup: 5,
    },
    1024: {
      slidesPerView: 4.3,
      slidesPerGroup: 4,
    },
    768: {
      slidesPerView: 3.3,
      slidesPerGroup: 3,
    },
    425: {
      slidesPerView: 2.2,
      slidesPerGroup: 2,
      spaceBetween: 5,
      slidesOffsetAfter: 16,
      slidesOffsetBefore: 16,
    },
    320: {
      slidesPerView: 2.2,
      slidesPerGroup: 2,
      spaceBetween: 5,
      slidesOffsetAfter: 16,
      slidesOffsetBefore: 16,
    },
  },
  pagination: {
    el: '.cards-scroller-pagination',
  },
}
