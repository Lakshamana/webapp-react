import { useEffect, useState, memo } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper"
import { Button } from "components"
import { MemoizedActionsList } from "../BillboardActions"
import { getActions, getItems } from "utils"
import { Props, BillboardItem } from "../../types"
import { Params } from "../../settings"
import {
	BillboardItems,
	HeroImageWrapper,
	HeroImg,
	Info,
	InfoContent,
	Title,
	Description,
	ContentButtons
} from "./style"
import { colors } from 'styles'
import './style.css'
import "swiper/swiper-bundle.min.css"

SwiperCore.use([Autoplay, Pagination, EffectFade])

const SwiperSlideList = ({ items, customButtons }: Props) => {
	const [size, setSize] = useState({
		x: window.innerWidth,
		y: window.innerHeight
	})

	const getSize = () => {
		setSize({
			x: window.innerWidth,
			y: window.innerHeight
		})
	}

	useEffect(() => (window.onresize = getSize), [])

	return (
		<Swiper {...Params} style={{ position: "relative", height: "100%"}}>
			{getItems(items).map((items: BillboardItem, i: number) => (
				<SwiperSlide style={{ width: "100%" }} key={`Slide-${i}`} className='slider'>
					<BillboardItems>
						<HeroImageWrapper>
							<HeroImg
								ClassName='swiper-lazy'
								src={size.x >= 640 ? items.banner : items.cover}
							/>
						</HeroImageWrapper>
						<Info style={{ color: items.infoColor }}>
							<InfoContent>
								<Title>{items.title}</Title>
								<Description>{items.description}</Description>
								<MemoizedActionsList actions={getActions(items?.actions)} />
							</InfoContent>
						</Info>
					</BillboardItems>
				</SwiperSlide>
			))}
			<div className="swiper-pagination pagination" />
		</Swiper>
	)
}

const MemoizedSwiperSlideList = memo(SwiperSlideList)

export { MemoizedSwiperSlideList }
