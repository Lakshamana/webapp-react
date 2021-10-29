import React from 'react';
import { LivestreamPostCard, CardsScroller } from 'components';
import { SwiperSlide } from 'swiper/react';
import { LiveScrollerProps } from './types';
import { Header, ContentScroller } from './style'
import { Text } from 'components'
import { Link } from '@chakra-ui/react'

const LivestreamScroller = ({ items, sectionTitle, sectionUrl, hasMoreLink }: LiveScrollerProps) => {

    let slides = items?.map(post => {
        return (<SwiperSlide key={`slide-${post.id}-livestream`}>
            <LivestreamPostCard
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
            <CardsScroller children={slides} />
        </ContentScroller>
    </>)
}

export { LivestreamScroller }