import { Divider } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import {
	MainLayout,
	Container,
	GridCards,
	CollectionPostCard,
	VideoPostCard
} from "components"
import { colors } from 'styles'

const MyListPage = () => {
	const { t } = useTranslation()
	return (
		<MainLayout>
			<Container flexDirection={"column"} py={30} px={100} width={"100%"}>
				<GridCards
					headerTitle={t("page.my_list.my_list")}
					rowGap={24}
					columnGap={16}
					xl={4}
					lg={3}
					md={2}
					sm={1}
					ssm={1}>
					<CollectionPostCard
						id='656321515'
						coverImage='https://portalfamosos.com.br/wp-content/uploads/2021/04/coldplay-high-power-novo-single-max-martin-destaque-portal-famosos.png'
						isGeolocked={true}
					/>
				</GridCards>
				<Divider
					orientation='horizontal'
					height={2}
					width={"100%"}
					my={4}
					color={`${colors.grey["800"]}`}
				/>
				<GridCards
					headerTitle={t("page.my_list.collection")}
					rowGap={8}
					columnGap={8}
					xl={4}
					lg={3}
					md={3}
					sm={1}
					ssm={1}>
					<VideoPostCard
						id='45645646464646'
						coverImage='https://adnews.com.br/wp-content/uploads/2021/07/HBO-Max-desconto.jpg'
					/>
				</GridCards>
			</Container>
		</MainLayout>
	)
}

export { MyListPage }
