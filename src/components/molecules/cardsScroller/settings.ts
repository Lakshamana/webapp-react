import { SwiperOptions } from "swiper"

export const SWIPPER_PARAMS: SwiperOptions = {
	spaceBetween: 10,
	speed: 800,
	setWrapperSize: true,
	roundLengths: false,
	watchOverflow: true,
	touchMoveStopPropagation: true,
	touchStartPreventDefault: true,
	freeModeMomentum: false,
	preloadImages: false,
	preventClicks: false,
	freeModeMomentumBounce: false,
	slidesOffsetAfter: 0,
	loop: false,
	breakpoints: {
		1440: {
			slidesPerView: 5
		},
		1024: {
			slidesPerView: 4
		},
		768: {
			slidesPerView: 3
		},
		425: {
			slidesPerView: 2
		},
		320: {
			slidesPerView: 2
		}
	}
}
