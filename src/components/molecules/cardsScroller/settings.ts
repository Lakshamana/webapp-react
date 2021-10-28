import { SwiperOptions } from "swiper"

export const SWIPPER_PARAMS: SwiperOptions = {
	spaceBetween: 10,
	navigation: {
		prevEl: ".swiper-button-prev",
		nextEl: ".swiper-button-next"
	},
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
			slidesPerView: 1
		}
	}
}
