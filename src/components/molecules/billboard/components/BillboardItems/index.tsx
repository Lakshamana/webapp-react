import { memo } from 'react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, EffectFade } from 'swiper'
import { ActionsList } from '../BillboardActions'
import { getActions, getItems } from 'utils/helperFunctions'
import { Props, BillboardItem } from '../../types'
import { Params } from '../../settings'
import {
  BillboardItems,
  HeroImageWrapper,
  HeroImg,
  Info,
  InfoContent,
  Title,
  Description,
  BoxButtons,
  SwiperStyled
} from './style'
import { breakpoints } from 'styles'
import './style.css'
import 'swiper/swiper-bundle.min.css'
import { Badge } from 'components/atoms'
import { CategoryButtons } from '../CategoryButtons'

SwiperCore.use([Autoplay, Pagination, EffectFade])

const SwiperSlideList = ({ items, customButtons }: Props) => {
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

  if (!items || !items.length) return <></>

  return (
    <SwiperStyled {...Params} style={{ position: 'relative', height: '100%' }}>
      {getItems(items).map((item: BillboardItem) => (
        <SwiperSlide style={{ width: '100%' }} key={item.id} className="slider">
          <BillboardItems>
            <HeroImageWrapper>
              <HeroImg
                className="swiper-lazy"
                src={isDesktop ? item.banner || item.image : item.cover || item.image}
              />
            </HeroImageWrapper>
            <Info style={{ color: item.infoColor }}>
              <InfoContent>
                {item.live && <Badge bg={'#FF0000'}>LIVE</Badge>}
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                {customButtons ? (
                  <BoxButtons>
                    <ActionsList actions={getActions(item?.actions)} />
                  </BoxButtons>
                ) : (
                 <CategoryButtons isPinned={item.isPinned || false} categoryId={item.id}></CategoryButtons>
                )}
              </InfoContent>
            </Info>
          </BillboardItems>
        </SwiperSlide>
      ))}
      <div className="swiper-pagination billboard-pagination" />
    </SwiperStyled>
  )
}

const MemoizedSwiperSlideList = memo(SwiperSlideList)

export { MemoizedSwiperSlideList }