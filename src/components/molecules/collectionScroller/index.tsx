import React from "react"
import { CollectionPostCard, CardsScroller } from "components"
import { SwiperSlide } from "swiper/react"
import { CollectionScrollerProps } from "./types"
import { Header, ContentScroller } from "./style"
import { Text } from "components"
import { Link } from "@chakra-ui/react"

const CollectionScroller = ({
	items,
	sectionTitle,
	sectionUrl,
	hasMoreLink
}: CollectionScrollerProps) => {
	let slides = items?.map((post) => {
		return (
			<SwiperSlide key={`slide-${post.id}-collection`}>
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
			</SwiperSlide>
		)
	})

	return (
		<>
			<ContentScroller>
				<Header>
					<Text
						color={"#FFFFFF"}
						fontSize={"28px"}
						fontWeight={500}
						marginRight={"18px"}
						lineHeight={"34px"}>
						{sectionTitle || ""}
					</Text>
					{hasMoreLink ? (
						<Link
							color={"#0460FF"}
							fontSize={"20px"}
							fontWeight={400}
							textDecoration={"underline"}
							to={sectionUrl}>
							more
						</Link>
					) : (
						""
					)}
				</Header>
				<CardsScroller children={slides} type='collection' />
			</ContentScroller>
		</>
	)
}

export { CollectionScroller }
