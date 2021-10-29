import { memo } from "react"
import { CollectionPostCard } from "components"
import { SwiperSlide } from "swiper/react"
import { CollectionScrollerProps } from '../types'
import { CollectionPostProps } from 'components/atoms/collectionPostCards/types';
import { getItems } from 'utils'

const CollectionItems = ({ items }: CollectionScrollerProps): JSX.Element => {
	return (
    <>
    {getItems(items).map((item: CollectionPostProps, id: number ) => {
      return <SwiperSlide key={`slide-${id}-collection`}>
          <CollectionPostCard
            id={item.id}
            collectionTitle={item.collectionTitle}
            collectionUrl={item.collectionUrl}
            coverImage={item.coverImage}
            isNew={item.isNew}
            newTag={item.newTag}
            isExclusive={item.isExclusive}
            isGeolocked={item.isGeolocked}
          />
        </SwiperSlide>
    })}
    </>
  )
}

const CollectionList = memo(CollectionItems)

export { CollectionList }
