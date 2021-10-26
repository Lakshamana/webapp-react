import React from 'react';
import { CollectionPostCard, CardsScroller } from 'components';
import { SwiperSlide } from 'swiper/react';
import { CollectionScrollerProps } from './types';
import { Header, ContentScroller } from './style'
import { Text } from 'components'
import { Link } from '@chakra-ui/react'

const CollectionScroller = ({ items, sectionTitle, sectionUrl, hasMoreLink }: CollectionScrollerProps) => {

    let slides = items?.map((post, i) => {
        return (<SwiperSlide key={`Slide-${i}`}>
            <CollectionPostCard
                id={post.id}
                collectionTitle={post.collectionTitle}
                collectionUrl={post.collectionUrl}
                coverImage={post.coverImage}
                isNew={post.isNew}
                newTag={post.newTag}
                isExclusive={post.isExclusive}
                isGeolocked={post.isGeolocked}
            />
        </SwiperSlide>)
    })

    return (<>
        <ContentScroller>
            <Header>
                <Text color={"#FFFFFF"} fontSize={"22px"} fontWeight={500} marginRight={"18px"}>{sectionTitle || ''}</Text>
                {hasMoreLink ? <Link color={"#0460FF"} fontSize={"16px"} fontWeight={400} textDecoration={"none"} to={sectionUrl}>mais</Link> : ''}
            </Header>
            <CardsScroller children={slides} />
        </ContentScroller>
    </>)
}

export { CollectionScroller }