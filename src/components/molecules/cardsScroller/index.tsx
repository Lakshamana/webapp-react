import React from 'react';
import { Content } from './style';
import './style.css';
import { PostsProps } from './types';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation])

const CardsScroller = ({ children }: PostsProps) => {
  const Params: SwiperOptions = {
    spaceBetween: 10,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
    speed: 800,
    setWrapperSize: true,
    roundLengths: false,
    watchOverflow: false,
    touchMoveStopPropagation: true,
    touchStartPreventDefault: true,
    freeModeMomentum: false,
    preloadImages: false,
    preventClicks: false,
    freeModeMomentumBounce: false,
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      600: {
        slidesPerView: 2
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
    },
  }

  return (
    <React.Fragment>
      <Content>
        <Swiper {...Params}>
          {children}
        </Swiper>
        <div className='swiper-button-prev' />
        <div className='swiper-button-next' />
      </Content>
    </React.Fragment>
  );
}


export { CardsScroller }
