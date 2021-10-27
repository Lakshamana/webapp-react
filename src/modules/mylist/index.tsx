import { Divider } from "@chakra-ui/react"
import {
	MainLayout,
	Container,
	GridCards,
	CollectionPostCard,
	VideoPostCard
} from "components"
import { colors } from 'styles'

const MyListPage = () => {
	return (
		<MainLayout>
			<Container flexDirection={"column"} py={30} px={50} width={"100%"}>
				<GridCards
					headerTitle='My list'
					rowGap={24}
					columnGap={16}
					xl={4}
					lg={3}
					md={2}
					sm={1}
					ssm={1}>
					<CollectionPostCard
						coverImage='https://portalfamosos.com.br/wp-content/uploads/2021/04/coldplay-high-power-novo-single-max-martin-destaque-portal-famosos.png'
						isExclusive={false}
						isGeolocked={true}
					/>
				</GridCards>
				<Divider
					orientation='horizontal'
					height={2}
					width={"100%"}
					mt={4}
					mb={4}
					color={`${colors.grey["800"]}`}
				/>
				<GridCards
					headerTitle='Collection'
					rowGap={8}
					columnGap={8}
					xl={4}
					lg={3}
					md={3}
					sm={1}
					ssm={1}>
					<VideoPostCard
						coverImage='https://adnews.com.br/wp-content/uploads/2021/07/HBO-Max-desconto.jpg'
						isExclusive={false}
						isGeolocked={false}
					/>
				</GridCards>
			</Container>
		</MainLayout>
	)
}

export { MyListPage }
