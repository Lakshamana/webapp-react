import { SwiperOptions } from 'swiper'

export const Params: SwiperOptions = {
    speed: 800,
    lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: true
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.billboard-pagination',
        clickable: true,
        bulletElement: 'button'
    },
}