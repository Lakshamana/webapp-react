import React from 'react';
import { VideoPostCard, CardsScroller } from 'components';
import { SwiperSlide } from 'swiper/react';
import { VideoScrollerProps } from './types';
import { Header, ContentScroller } from './styles'
import { Text } from 'components'
import { Link } from '@chakra-ui/react'

const OnDemandScroller = ({ items, sectionTitle, sectionUrl, hasMoreLink }: VideoScrollerProps) => {

    let slides = items?.map((post, i) => {
        return (<SwiperSlide key={`Slide-${i}`}>
            <VideoPostCard
                postTitle={post.postTitle}
                postUrl={post.postUrl}
                coverImage={post.coverImage}
                mediaLength={post.mediaLength}
                views={post.views}
                isExclusive={post.isExclusive}
                isGeolocked={post.isGeolocked}
            />
        </SwiperSlide>)
    })

    return (<>
        <ContentScroller>
            <Header>
                <Text color={"#FFFFFF"} fontSize={"22px"} fontFamily={"Roboto"} fontWeight={500} marginRight={"18px"}>{sectionTitle || ''}</Text>
                {hasMoreLink ? <Link color={"#0460FF"} fontSize={"16px"} fontFamily={"Roboto"} fontWeight={400} textDecoration={"none"} to={sectionUrl}>mais</Link> : ''}
            </Header>
            <CardsScroller children={slides} />
        </ContentScroller>
    </>)
}

export { OnDemandScroller }