import React from "react"
import { Swiper } from "swiper/react"
import SwiperCore, { Navigation, SwiperOptions } from "swiper"
import { PostsProps } from "./types"
import { Content } from "./style"
import "./style.css"
import "swiper/swiper-bundle.min.css"
import { SWIPPER_PARAMS } from './settings'

SwiperCore.use([Navigation])

const CardsScroller = ({ children }: PostsProps) => {
  return (
    <React.Fragment>
      <Content>
        <Swiper {...SWIPPER_PARAMS}>
          {children}
        </Swiper>
        <div className='swiper-button-prev' />
        <div className='swiper-button-next' />
      </Content>
    </React.Fragment>
  );
}

export { CardsScroller }
