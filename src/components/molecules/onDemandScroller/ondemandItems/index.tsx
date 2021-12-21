import { memo } from "react"
import { VideoPostCard } from "components"
import { SwiperSlide } from "swiper/react"
import { VideoScrollerProps } from "../types"
import { VideoPostProps } from "components/atoms/videoPostCards/types"
import { getItems } from "helpers"

const OndemandItems = ({ items }: VideoScrollerProps): JSX.Element => {
	return (
		<>
			{getItems(items).map((item: VideoPostProps, id: number) => {
				return (
					<SwiperSlide key={`slide-${item.id}-ondemand`}>
						<VideoPostCard
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

const OndemandList = memo(OndemandItems)

export { OndemandList }
