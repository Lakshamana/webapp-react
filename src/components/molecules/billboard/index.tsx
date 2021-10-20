import { MemoizedSwiperSlideList } from "./components/BillboardItems"
import { Props } from "./types"
import { BillboardWrapper, Billboard } from "./style"

const BillboardScroller = ({ items, actions }: Props) => {
	return (
		<BillboardWrapper>
			<Billboard>
						<MemoizedSwiperSlideList items={items} actions={actions}/>
			</Billboard>
		</BillboardWrapper>
	)
}

export { BillboardScroller }
