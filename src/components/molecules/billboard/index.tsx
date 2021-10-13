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

    const getSize = () => {
        setSize({
            x: window.innerWidth,
            y: window.innerHeight
        })
    }

    useEffect(() => (window.onresize = getSize), [])

    let renderActions = (actions: BillboardItemActions[]) => {
        return actions.map((action, i) => {
            return <Button
                key={`Button-${i}`}
                backgroundColor={action.bgColor}
                borderColor={action.borderColor}
                iconName={action.icon}
                color={action.textColor}
                type='billboard'
                label={action.label}
                width={size.x >= 640 ? 250 : 150}
                height={size.x >= 640 ? 50 : 40}
                marginTop={size.x >= 640 ? 25 : 15}
                marginRight={size.x >= 640 ? 15 : 0}
            />
        })
    }


    let slides = items?.map((item, i) => {
        return (<SwiperSlide key={`Slide-${i}`} style={{ "width": "100%" }}>
            <BillboardItems>
                <HeroImageWrapper>
                    <HeroImg ClassName="swiper-lazy" src={size.x >= 640 ? item.banner : item.cover} />
                </HeroImageWrapper>
                <Info style={{ color: item.infoColor }}>
                    <InfoContent>
                        <Title>{item.title}</Title>
                        <Description>{item.description}</Description>
                        <Actions>
                            {item.actions && renderActions(item.actions)}
                        </Actions>
                    </InfoContent>
                </Info>
            </BillboardItems>
        </SwiperSlide>)
    })

    const Params: SwiperOptions = {
        speed: 800,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.pagination',
            clickable: true,
            bulletElement: 'button'
        },
    }

    return (
        <React.Fragment>
            <BillboardWrapper>
                <Billboard>
                    <Swiper {...Params} style={{ "position": "relative", "height": "100%" }}>
                        {slides}
                    </Swiper>
                    <div className="swiper-pagination pagination" />
                </Billboard>
            </BillboardWrapper>
        </React.Fragment>
    )
}

export { BillboardScroller } 