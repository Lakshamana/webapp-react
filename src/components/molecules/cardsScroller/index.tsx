import React from "react"
import { Swiper } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"
import { PostsProps } from "./types"
import { SWIPPER_PARAMS } from "./settings"
import { Content } from "./style"
import "./style.css"
import "swiper/swiper-bundle.min.css"
import { RANDOM_ID } from "utils"

SwiperCore.use([Navigation])

const CardsScroller = ({ children, type }: PostsProps) => {
	let randomId = `${type}-${RANDOM_ID()}`

	SWIPPER_PARAMS["navigation"] = {
		prevEl: `.swiper-button-prev.${randomId}`,
		nextEl: `.swiper-button-next.${randomId}`
	}
	return (
		<React.Fragment>
			<Content>
				<Swiper {...SWIPPER_PARAMS}>
					<div className='swiper-wrapper'>{children}</div>
				</Swiper>
				<div className={`swiper-button-prev ${randomId}`} />
				<div className={`swiper-button-next ${randomId}`} />
			</Content>
		</React.Fragment>
	)
}

export { CardsScroller }
