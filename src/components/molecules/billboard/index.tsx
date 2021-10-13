import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper"
import { Button } from "components"
import { Params } from "./settings"
import { getItems, getActions } from "./utils"
import { Props, BillboardItemActions, BillboardItem } from "./types"
import {
	BillboardWrapper,
	Billboard,
	BillboardItems,
	HeroImageWrapper,
	HeroImg,
	Info,
	InfoContent,
	Title,
	Description,
	Actions
} from "./style"
import "./style.css"
import "swiper/swiper-bundle.min.css"

SwiperCore.use([Autoplay, Pagination, EffectFade])

const BillboardScroller = ({ items, actions }: Props) => {
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
		<BillboardWrapper>
			<Billboard>
				<Swiper {...Params} style={{ position: "relative", height: "100%" }}>
					{getItems(items).map((items: BillboardItem, i: number) => (
						<SwiperSlide key={`Slide-${i}`} style={{ width: "100%" }}>
							<BillboardItems>
								<HeroImageWrapper>
									<HeroImg
										ClassName="swiper-lazy"
										src={size.x >= 640 ? items.banner : items.cover}
									/>
								</HeroImageWrapper>
								<Info style={{ color: items.infoColor }}>
									<InfoContent>
										<Title>{items.title}</Title>
										<Description>{items.description}</Description>
										<Actions>
											{getActions(actions).map(
												(actions: BillboardItemActions, i: number) => (
													<Button
														key={`Button-${i}`}
														backgroundColor={actions.bgColor}
														borderColor={actions.borderColor}
														iconName={actions.icon}
														color={actions.textColor}
														type="billboard"
														label={actions.label}
														width={size.x >= 768 ? 250 : 150}
														height={size.x >= 768 ? 50 : 40}
														marginTop={size.x >= 768 ? 25 : 15}
														marginRight={size.x >= 768 ? 15 : 15}
													/>
												)
											)}
										</Actions>
									</InfoContent>
								</Info>
							</BillboardItems>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="swiper-pagination pagination" />
			</Billboard>
		</BillboardWrapper>
	)
}

export { BillboardScroller } 