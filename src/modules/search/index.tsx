import { Divider } from '@chakra-ui/react'
import {
  Container,
  GridCards,
  CategoryPostCard
} from 'components'
import { colors } from 'styles'

const SearchPage = () => {
  return (
    <Container
      flexDirection={'column'}
      py={32}
      px={[2, 32, 32, 64]}
      width={'100%'}
    >
      <GridCards
        headerTitle="My list"
        rowGap={24}
        columnGap={16}
        xl={4}
        lg={3}
        md={3}
        sm={2}
        ssm={2}
      >
        <CategoryPostCard
          id="656321515"
          thumbnail="https://portalfamosos.com.br/wp-content/uploads/2021/04/coldplay-high-power-novo-single-max-martin-destaque-portal-famosos.png"
        />
        <CategoryPostCard
          id="98954521231"
          thumbnail="https://www.sagrado.edu/wp-content/uploads/bb-plugin/cache/radio-visual-panorama.jpg"
        />
        <CategoryPostCard
          id="0540687401"
          thumbnail="https://i.pinimg.com/originals/23/e5/59/23e5598550fd2f7492ed7527a1eb0dde.jpg"
        />
      </GridCards>
      <Divider
        orientation="horizontal"
        height={2}
        width={'100%'}
        mt={4}
        mb={6}
        color={colors.grey['800']}
      />
      <GridCards
        headerTitle="Collection"
        rowGap={8}
        columnGap={8}
        xl={4}
        lg={3}
        md={3}
        sm={2}
        ssm={2}
      ></GridCards>
      <Divider
        orientation="horizontal"
        height={2}
        width={'100%'}
        mt={4}
        mb={6}
        color={colors.grey['800']}
      />
      <GridCards
        headerTitle="Family"
        rowGap={8}
        columnGap={8}
        xl={4}
        lg={3}
        md={3}
        sm={2}
        ssm={2}
      ></GridCards>
      <Divider
        orientation="horizontal"
        height={2}
        width={'100%'}
        mt={4}
        mb={6}
        color={colors.grey['800']}
      />
    </Container>
  )
}

export { SearchPage }
