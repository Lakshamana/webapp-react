import { Search as SearchIcon } from "react-feather"
import { useTranslation } from "react-i18next"
import { Container, InputInline } from "components"
import { PropsChannelSearch } from "../../types"
import { SearchContainer } from "./styles"
import { colors } from "styles"

const ChannelSearch = ({ search, onChange }: PropsChannelSearch) => {
	const { t } = useTranslation()
	return (
		<SearchContainer
			display='flex'
			justifyContent='center'
			width='95%'
			mx={2}
			py={3}>
			<Container width='85%'>
				<InputInline
					placeholder={t("header.channel_search")}
					background={colors.backgroundLayout}
					value={search}
					{...{ onChange }}
				/>
			</Container>
			<Container ml={2}>
				<SearchIcon color={colors.white} height={18} width={18} />
			</Container>
		</SearchContainer>
	)
}

export { ChannelSearch }
