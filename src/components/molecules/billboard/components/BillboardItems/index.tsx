import { useEffect, useState, memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, EffectFade } from 'swiper'
import { useTranslation } from 'react-i18next'
import { Button } from 'components'
import { ActionsList } from '../BillboardActions'
import { getActions, getItems } from 'utils'
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
  ContentButton,
} from './style'
import { colors } from 'styles'
import './style.css'
import 'swiper/swiper-bundle.min.css'
import { VideoBadge } from 'components/atoms'

SwiperCore.use([Autoplay, Pagination, EffectFade])

const SwiperSlideList = ({ items, customButtons }: Props) => {
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  })

  const getSize = () => {
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    })
  }

  useEffect(() => (window.onresize = getSize), [])

  const { t } = useTranslation()

  if (!items || !items.length) return <></>

  return (
    <Swiper {...Params} style={{ position: 'relative', height: '100%' }}>
      {getItems(items).map((item: BillboardItem) => (
        <SwiperSlide style={{ width: '100%' }} key={item.id} className="slider">
          <BillboardItems>
            <HeroImageWrapper>
              <HeroImg
                className="swiper-lazy"
                src={size.x >= 640 ? item.banner : item.cover}
              />
            </HeroImageWrapper>
            <Info style={{ color: item.infoColor }}>
              <InfoContent>
                {item.live && <VideoBadge bg={'#FF0000'}>LIVE</VideoBadge>}
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                {customButtons ? (
                  <BoxButtons>
                    <ActionsList actions={getActions(item?.actions)} />
                  </BoxButtons>
                ) : (
                  <BoxButtons>
                    <ContentButton>
                      <Button
                        backgroundColor={`${colors.blue['300']}`}
                        borderColor={`${colors.blue['300']}`}
                        iconName={'play'}
                        color={`${colors.white}`}
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
      <div className="swiper-pagination billboard-pagination" />
    </Swiper>
  )
}

const MemoizedSwiperSlideList = memo(SwiperSlideList)

export { MemoizedSwiperSlideList }
