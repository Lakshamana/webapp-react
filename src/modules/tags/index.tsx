import { Divider } from '@chakra-ui/react'
import {
  Container,
  GridCards,
  CategoryPostCard,
} from 'components'
import { colors } from 'styles'

const TagPage = () => {
  return (
    <Container
      flexDirection={'column'}
      py={32}
      px={[4, 32, 32, 64]}
      width={'100%'}
    >
      <GridCards
        headerTitle="Tags"
        rowGap={24}
        columnGap={16}
        xl={4}
        lg={3}
        md={3}
        sm={2}
        ssm={2}
      >
        <CategoryPostCard
          id="8732151"
          thumbnail="https://radionotas.com/wp-content/uploads/2020/06/Visual-Radio-scaled.jpg"
        />
        <CategoryPostCard
          id="9895965"
          thumbnail="https://www.sagrado.edu/wp-content/uploads/bb-plugin/cache/radio-visual-panorama.jpg"
        />
        <CategoryPostCard
          id="3265262"
          thumbnail="https://www.radionotas.com/wp-content/uploads/2018/09/cabina-de-radio-123.jpg"
        />
      </GridCards>
      <Divider
        orientation="horizontal"
        height={2}
        width={'100%'}
        my={6}
        color={colors.grey['800']}
      />
    </Container>
  )
}

export { TagPage }
