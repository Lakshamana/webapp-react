import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper"
import { MemoizedSwiperSlideList } from "./components/BillboardItems"
import { Params } from "./settings"
import { Props } from "./types"
import { BillboardWrapper, Billboard } from "./style"
import "./style.css"
import "swiper/swiper-bundle.min.css"

SwiperCore.use([Autoplay, Pagination, EffectFade])

const BillboardScroller = ({ items, actions }: Props) => {
	return (
		<BillboardWrapper>
			<Billboard>
				<Swiper {...Params} style={{ position: "relative", height: "100%" }}>
					<SwiperSlide style={{ width: "100%" }}>
						<MemoizedSwiperSlideList items={items} actions={actions}/>
					</SwiperSlide>
				</Swiper>
				<div className="swiper-pagination pagination" />
			</Billboard>
		</BillboardWrapper>
	)
}

export { BillboardScroller }
