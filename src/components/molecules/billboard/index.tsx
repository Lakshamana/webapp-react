import { MemoizedSwiperSlideList } from './components/BillboardItems'
import { Billboard, BillboardWrapper } from './style'
import { Props } from './types'

const BillboardScroller = ({ items, customButtons, reachEnd }: Props) => {
  return (
    <BillboardWrapper>
      <Billboard>
        <MemoizedSwiperSlideList
          reachEnd={reachEnd}
          items={items}
          customButtons={customButtons}
        />
      </Billboard>
    </BillboardWrapper>
  )
}

export { BillboardScroller }
