import React from "react"
import SwiperCore, { Navigation, Pagination } from "swiper"
import { PostsProps } from "./types"
import { SWIPPER_PARAMS } from "./settings"
import { SwiperStyled } from "./style"
import { Content } from "./style"
import "swiper/swiper-bundle.min.css"
import { RANDOM_ID } from "utils"

SwiperCore.use([Navigation, Pagination])

const CardsScroller = ({ children, type }: PostsProps) => {
	let randomId = `${type}-${RANDOM_ID()}`

	SWIPPER_PARAMS["navigation"] = {
		prevEl: `.swiper-button-prev.${randomId}`,
		nextEl: `.swiper-button-next.${randomId}`
	}

	return (
		<React.Fragment>
			<Content>
				<SwiperStyled {...SWIPPER_PARAMS}>
					<div className='swiper-wrapper'>
						{children}
					</div>
					<div className="swiper-pagination-cards cards-scroller-pagination" />
					<div className={`swiper-button-prev ${randomId}`} />
					<div className={`swiper-button-next ${randomId}`} />
				</SwiperStyled>
			</Content>
		</React.Fragment>
	)
}
export { CardsScroller }
