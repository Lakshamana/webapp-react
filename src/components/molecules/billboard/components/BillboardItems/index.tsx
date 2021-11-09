import { useEffect, useState, memo } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper"
import { useTranslation } from "react-i18next"
import { Button } from "components"
import { ActionsList } from "../BillboardActions"
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

	const { t } = useTranslation()

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
								{customButtons ? (
									<ContentButtons>
										<ActionsList actions={getActions(items?.actions)} />
									</ContentButtons>
								) : (
									<ContentButtons>
										<Button
											backgroundColor={`${colors.blue["300"]}`}
											borderColor={`${colors.blue["300"]}`}
											iconName={"play"}
											color={`${colors.white}`}
											type='billboard'
											label={t("page.collection.watch_now")}
											width={size.x <= 768 ? 146 : 267}
											height={size.x <= 768 ? 40 : 54}
											marginRight={size.x > 320 ? 15 : ""}
											marginBottom={size.x <= 320 ? 10 : ""}
										/>
										<Button
											backgroundColor={`${colors.grey["800"]}`}
											borderColor={`${colors.grey["800"]}`}
											iconName={"plus-circle"}
											color={`${colors.white}`}
											type='billboard'
											label={t("page.collection.my_list")}
											width={size.x <= 768 ? 146 : 267}
											height={size.x <= 768 ? 40 : 54}
											marginRight={size.x > 320 ? 15 : ""}
											marginBottom={size.x <= 320 ? 10 : ""}
										/>
									</ContentButtons>
								)}
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
