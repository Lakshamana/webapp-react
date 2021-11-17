import { Link } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { CardsScroller } from "components"
import { Text } from "components"
import { LivestreamList } from "./livestreamItems"
import { LiveScrollerProps } from "./types"
import { Header, ContentScroller } from "./style"
import { colors, sizes } from "styles"
import { useThemeStore } from 'services/stores/theme'

const LivestreamScroller = ({
	items,
	sectionTitle,
	sectionUrl,
	hasMoreLink
}: LiveScrollerProps) => {
	const { t } = useTranslation();
	const { colorMode } = useThemeStore();

	return (
		<>
			<ContentScroller>
				<Header>
					<Text
						color={colors.generalText[colorMode]}
						fontSize={"28px"}
						paddingLeft={[sizes.paddingSm, sizes.paddingSm, sizes.paddingMd, sizes.paddingLg, sizes.paddingLg]}
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
							{t("common.more")}
						</Link>
					) : (
						""
					)}
				</Header>
				<CardsScroller type='livestream'>
					<LivestreamList items={items} />
				</CardsScroller>
			</ContentScroller>
		</>
	)
}

export { LivestreamScroller }
