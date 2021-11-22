import { Link } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { CardsScroller } from "components"
import { Text } from "components"
import { OndemandList } from "./ondemandItems"
import { VideoScrollerProps } from "./types"
import { Header, ContentScroller } from "./styles"
import { colors, sizes } from "styles"
import { useThemeStore } from 'services/stores/theme'

const OnDemandScroller = ({
	items,
	sectionTitle,
	sectionUrl,
	hasMoreLink
}: VideoScrollerProps) => {

	const { t } = useTranslation()
	const { colorMode } = useThemeStore();

	return (
		<>
			<ContentScroller>
				<Header>
					<Text
						color={colors.generalText[colorMode]}
						fontSize={"28px"}
						fontWeight={500}
						paddingLeft={[sizes.paddingSm, sizes.paddingSm, sizes.paddingMd, sizes.paddingLg, sizes.paddingLg]}
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
				<CardsScroller type='ondemand'>
					<OndemandList items={items} />
				</CardsScroller>
			</ContentScroller>
		</>
	)
}

export { OnDemandScroller }
