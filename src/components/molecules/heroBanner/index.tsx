import { useMediaQuery } from '@chakra-ui/media-query'
import { HeroBannerProps } from 'types/common'
import {
  BannerWrapper,
  Banner,
  BannerItems,
  HeroImageWrapper,
  HeroImg,
  Info,
  InfoContent,
  Title,
  Description,
  BoxButtons,
} from './style'
import { breakpoints } from 'styles'

const HeroBanner = ({ children, ...props }: HeroBannerProps) => {
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

  return (
    <BannerWrapper>
      <Banner>
        <BannerItems>
          <HeroImageWrapper>
            <HeroImg
              className="swiper-lazy"
              src={isDesktop ? props.desktopImage : props.mobileImage}
            />
          </HeroImageWrapper>
          <Info>
            <InfoContent>
              <Title>{props.title}</Title>
              <Description>{props.description}</Description>
              <BoxButtons>{children}</BoxButtons>
            </InfoContent>
          </Info>
        </BannerItems>
      </Banner>
    </BannerWrapper>
  )
}

export { HeroBanner }
