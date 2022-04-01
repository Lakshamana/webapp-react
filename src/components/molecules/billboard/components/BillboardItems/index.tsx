import { memo } from 'react'
import { useMediaQuery } from '@chakra-ui/media-query'
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
import { colors, breakpoints } from 'styles'
import './style.css'
import 'swiper/swiper-bundle.min.css'
import { Badge } from 'components/atoms'

SwiperCore.use([Autoplay, Pagination, EffectFade])

const SwiperSlideList = ({ items, customButtons }: Props) => {
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

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
                  <BoxButtons>
                    <ContentButton>
                      <Button
                        iconName={'play'}
                        label={t('page.categories.watch_now')}
                        width={'100%'}
                        height={'100%'}
                      />
                    </ContentButton>
                    <ContentButton>
                      <Button
                        backgroundColor={`${colors.grey['800']}`}
                        variant={'unstyled'}
                        iconName={item.isPinned ? 'check' : 'plus-circle'}
                        color={`${colors.white}`}
                        label={t('page.categories.my_list')}
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
