import { Divider } from "@chakra-ui/react"
import {
	MainLayout,
	Container,
	GridCards,
	CollectionPostCard
} from "components"
import { colors } from 'styles'

const TagPage = () => {
	return (
		<MainLayout>
			<Container flexDirection={"column"} py={32} px={[4, 32, 32, 64]} width={"100%"}>
				<GridCards
					headerTitle='Tags'
					rowGap={24}
					columnGap={16}
					xl={4}
					lg={3}
					md={3}
					sm={2}
					ssm={2}>
					<CollectionPostCard
						id='8732151'
						coverImage='https://radionotas.com/wp-content/uploads/2020/06/Visual-Radio-scaled.jpg'
					/>
					<CollectionPostCard
						id='9895965'
						coverImage='https://www.sagrado.edu/wp-content/uploads/bb-plugin/cache/radio-visual-panorama.jpg'
					/>
					<CollectionPostCard
						id='3265262'
						coverImage='https://www.radionotas.com/wp-content/uploads/2018/09/cabina-de-radio-123.jpg'
					/>
				</GridCards>
				<Divider
					orientation='horizontal'
					height={2}
					width={'100%'}
					my={6}
					color={colors.grey["800"]}
				/>
			</Container>
		</MainLayout>
	)
}

export { TagPage }
