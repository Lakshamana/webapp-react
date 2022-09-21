import { MemoizedSwiperSlideList } from './components/BillboardItems'
import { Billboard, BillboardWrapper } from './style'
import { Props } from './types'

const BillboardScroller = ({ items, customButtons, reachEnd }: Props) => (
  <BillboardWrapper>
    <Billboard>
      <MemoizedSwiperSlideList
        {...{ reachEnd, items, customButtons }}
      />
    </Billboard>
  </BillboardWrapper>
)

export { BillboardScroller }
