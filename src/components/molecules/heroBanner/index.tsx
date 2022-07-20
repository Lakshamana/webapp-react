import { useMediaQuery } from '@chakra-ui/media-query'
import { breakpoints } from 'styles'
import { HeroBannerProps } from 'types/common'
import {
  Banner,
  BannerItems, BannerWrapper, BoxButtons, Description, HeroImageWrapper,
  HeroImg,
  Info,
  InfoContent,
  Title
} from './style'

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
              <Description>
                <div dangerouslySetInnerHTML={{ __html: props.description || '' }} />
              </Description>
              <BoxButtons>{children}</BoxButtons>
            </InfoContent>
          </Info>
        </BannerItems>
      </Banner>
    </BannerWrapper>
  )
}

export { HeroBanner }
