import { useEffect, useState, memo } from "react"
import { MemoizedActionsList } from "../BillboardActions"
import { getActions, getItems } from "../../utils"
import { Props, BillboardItem } from "../../types"
import {
	BillboardItems,
	HeroImageWrapper,
	HeroImg,
	Info,
	InfoContent,
	Title,
	Description
} from "./style"

const SwiperSlideList = ({ items, actions }: Props) => {
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
		<>
			{getItems(items).map((items: BillboardItem, i: number) => (
				<BillboardItems key={`Slide-${i}`}>
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
							<MemoizedActionsList actions={getActions(actions)} />
						</InfoContent>
					</Info>
				</BillboardItems>
			))}
		</>
	)
}

const MemoizedSwiperSlideList = memo(SwiperSlideList)

export { MemoizedSwiperSlideList }
