import styled from 'styled-components'
import { Swiper } from 'swiper/react'
import { sizes } from 'styles'

export const Content: any = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
`

export const SwiperStyled = styled(Swiper)`
  .swiper-container {
    overflow: inherit !important;
    padding: 0 1.3rem !important;
  }

  .swiper-slide:hover {
    z-index: 1;
  }

  .disabled_swiper_button {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
  }

  .swiper-button-disabled {
    opacity: 0 !important;
  }

  .cards-scroller-pagination {
    z-index: 10;
    text-align: right;
    padding-right: ${sizes.paddingMd};
    height: 20px;
  }

  .cards-scroller-pagination .swiper-pagination-bullet {
    width: 15px;
    height: 4px;
    background: #ffffff;
    border: 0;
    opacity: 0.64;
    border-radius: 0;
    cursor: pointer;
  }

  .cards-scroller-pagination .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.brand.primary[theme.colorMode]};
  }

  .cards-scroller-pagination .swiper-pagination-bullet:hover,
  .cards-scroller-pagination .swiper-pagination-bullet:focus {
    outline: unset;
  }

  .swiper-button-next,
  .swiper-button-prev {
    height: calc(100% - 20px) !important;
    width: 50px !important;
    top: 0 !important;
    margin-top: 0 !important;
    color: white !important;
  }

  .swiper-button-prev {
    background: linear-gradient(
      to left,
      transparent,
      #0f0f0f 90%,
      #0f0f0f 100%
    );
    left: 0 !important;
  }

  .swiper-button-next {
    background: linear-gradient(
      to right,
      transparent,
      #0f0f0f 90%,
      #0f0f0f 100%
    );
    right: 0 !important;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 18px !important;
    font-weight: bold;
  }

  .linear-gradient {
    width: 100px;
    position: absolute;
    right: 0;
    height: 100%;
  }
`
