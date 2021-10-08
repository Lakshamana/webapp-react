import React from 'react';
import { Content } from './style';
import './style.css';
import { PostsProps } from './types';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation])

const CardsScroller = ({ children }: PostsProps) => {

  const navigationPrevRef = React.useRef<HTMLDivElement>(null)
  const navigationNextRef = React.useRef<HTMLDivElement>(null)

  const defaultBreakpoints = {
    0: {
      slidesPerView: 2
    },
    600: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 3
    },
    900: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 5
    },
    2000: {
      slidesPerView: 6
    }
  }

  const breakpoints = defaultBreakpoints

  const Params = {
    spaceBetween: 10,
    navigation: {
      prevEl: navigationPrevRef.current ? navigationPrevRef.current : undefined,
      nextEl: navigationNextRef.current ? navigationNextRef.current : undefined
    },
    speed: 800,
    roundLengths: true,
    watchOverflow: true,
    touchMoveStopPropagation: true,
    touchStartPreventDefault: true,
    freeModeMomentum: false,
    preloadImages: false,
    preventClicks: false,
    freeModeMomentumBounce: false,
    breakpoints,
  }

  return (
    <React.Fragment>
      <Content>
        <Swiper {...Params}>
          {children}
        </Swiper>
        <div ref={navigationPrevRef} />
        <div ref={navigationNextRef} />
      </Content>
    </React.Fragment>
  )
}


export { CardsScroller }
