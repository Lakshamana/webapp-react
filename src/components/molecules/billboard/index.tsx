import { MemoizedSwiperSlideList } from "./components/BillboardItems"
import { Props } from "./types"
import { BillboardWrapper, Billboard } from "./style"

const BillboardScroller = ({ items }: Props) => {
	return (
		<BillboardWrapper>
			<Billboard>
				<MemoizedSwiperSlideList items={items} />
			</Billboard>
		</BillboardWrapper>
	)
}

export { BillboardScroller }
