import { memo } from "react"
import { SwiperSlide } from "swiper/react"
import { LivestreamPostCard } from "components"
import { LiveScrollerProps } from "../types"
import { LivePostProps } from "components/atoms/livestreamPostCard/types"
import { getItems } from "utils"

const LivestreamItems = ({ items }: LiveScrollerProps): JSX.Element => {
	return (
		<>
			{getItems(items).map((item: LivePostProps, id: number) => {
				return (
					<SwiperSlide key={`slide-${item.id}-livestream`}>
						<LivestreamPostCard
							id={item.id}
							postTitle={item.postTitle}
							postUrl={item.postUrl}
							coverImage={item.coverImage}
							mediaLength={item.mediaLength}
							views={item.views}
							isExclusive={item.isExclusive}
							isGeolocked={item.isGeolocked}
						/>
					</SwiperSlide>
				)
			})}
		</>
	)
}

const LivestreamList = memo(LivestreamItems)

export { LivestreamList }
