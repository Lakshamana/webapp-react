import React from 'react';
import { VideoPostCard, CardsScroller } from 'components';
import { SwiperSlide } from 'swiper/react';
import { VideoScrollerProps } from './types';
import { Header, ContentScroller } from './styles'
import { Text } from 'components'
import { Link } from '@chakra-ui/react'

const OnDemandScroller = ({ items, sectionTitle, sectionUrl, hasMoreLink }: VideoScrollerProps) => {

    let slides = items?.map(post => {
        return (<SwiperSlide key={`slide-${post.id}-ondemand`}>
            <VideoPostCard
                id={post.id}
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
                <Text color={"#FFFFFF"} fontSize={"28px"} fontWeight={500} marginRight={"18px"} lineHeight={'34px'}>{sectionTitle || ''}</Text>
                {hasMoreLink ? <Link color={"#0460FF"} fontSize={"20px"} fontWeight={400} textDecoration={'underline'} to={sectionUrl}>more</Link> : ''}
            </Header>
            <CardsScroller children={slides} type='ondemand'/>
        </ContentScroller>
    </>)
}

export { OnDemandScroller }