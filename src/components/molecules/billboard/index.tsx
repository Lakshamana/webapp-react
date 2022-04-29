import { MemoizedSwiperSlideList } from "./components/BillboardItems"
import { Props } from "./types"
import { BillboardWrapper, Billboard } from "./style"

const BillboardScroller = ({ items, customButtons }: Props) => {
	return (
		<BillboardWrapper>
			<Billboard>
				<MemoizedSwiperSlideList items={items} customButtons={customButtons}/>
			</Billboard>
		</BillboardWrapper>
	)
}

export { BillboardScroller }
