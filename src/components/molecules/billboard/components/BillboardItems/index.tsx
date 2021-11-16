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
  BoxButtons,
  ContentButton
} from './style'
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
                  <BoxButtons>
                    <ActionsList actions={getActions(items?.actions)} />
                  </BoxButtons>
                ) : (
                  <BoxButtons>
                    <ContentButton>
                      <Button
                        backgroundColor={`${colors.blue['300']}`}
                        borderColor={`${colors.blue['300']}`}
                        iconName={'play'}
                        color={`${colors.white}`}
                        type="billboard"
                        label={t('page.collection.watch_now')}
                        width={'100%'}
                        height={'100%'}
                      />
                    </ContentButton>
                    <ContentButton>
                      <Button
                        backgroundColor={`${colors.grey['800']}`}
                        borderColor={`${colors.grey['800']}`}
                        iconName={'plus-circle'}
                        color={`${colors.white}`}
                        type="billboard"
                        label={t('page.collection.my_list')}
                        width={'100%'}
                        height={'100%'}
                      />
                    </ContentButton>
                  </BoxButtons>
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
